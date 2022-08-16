import React from "react";
import { AppForm } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv } from "../../Pages/style";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Constants/Constants";

function LoginForm() {

    const navigate = useNavigate()
    const [form, onChange] = useForm({email: "", password: ""})

    const Login = () => {
        axios.post(`${BASE_URL}/login`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            navigate("/admin/trips/list")
        })
        .catch((error) => {
            window.alert("E-mail e/ou senha incorretos. Verifique as informações e tente novamente.")
        })
    }

    const handleClick = (event) => {
        event.preventDefault()
        Login()
    }

    return (
        <div>
        <AppForm onSubmit={handleClick}>
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
        <ButtonsDiv>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
        </ButtonsDiv>
        </div>
    )
}

export default LoginForm