import React, { useState } from "react";
import { AppForm, Loader } from "./style";
import Loading from '../../Images/Loading-Labex.svg'
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Constants/Constants";

function LoginForm() {

    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const [loadingForm, setLoadingForm] = useState(false)

    const Login = () => {
        axios.post(`${BASE_URL}/login`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            setLoadingForm(false)
            window.localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
        })
        .catch((error) => {
            setLoadingForm(false)
            window.alert("E-mail e/ou senha incorretos. Verifique as informações e tente novamente.")
            clear()
        })
    }

    const handleClick = (event) => {
        setLoadingForm(true)
        event.preventDefault()
        Login()
    }

    return (
        <div>

        {loadingForm && <Loader><img src={Loading} alt="Carregando"/></Loader>}

        <AppForm onSubmit={handleClick}>

            <label htmlFor="email">E-mail</label>
            <input 
                name="email" 
                type="email" 
                value={form.email} 
                placeholder="E-mail" 
                onChange={onChange} 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                required
                autoFocus
            />

            <label htmlFor="password"> Senha </label>
            <input 
                name="password" 
                type="password" 
                value={form.password} 
                placeholder="Senha" 
                onChange={onChange} 
                required
            />
            <button>Login</button>
        </AppForm>
        </div>
    )
}

export default LoginForm