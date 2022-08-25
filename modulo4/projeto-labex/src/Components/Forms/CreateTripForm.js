import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../Constants/Constants";
import useForm from "../../Hooks/useForm";
import { AppForm, Loader } from "./style";
import Loading from '../../Images/Loading-Labex.svg'
import PlanetsList from '../PlanetsList.json'

function CreateTripForm() {
    
    const [form, onChange, clear] = useForm( { name: "", planet: "", date: "", description: "", durationInDays: "" })
    const planets = PlanetsList
    const token = window.localStorage.getItem("token")
    const [loadingForm, setLoadingForm] = useState(false)

    const CreateTrip = () => {
        axios.post(`${BASE_URL}/trips`, form, {
            headers: {
                "Content-Type": "application/json",
                "auth": token
            }
        })
        .then((response) => {
            setLoadingForm(false)
            window.alert("Viagem criada com sucesso!")
            clear()
        })
        .catch((error) => {
            setLoadingForm(false)
            window.alert("ERRO! Verifique se preencheu todas as informações corretamente e tente de novo!")
        })
    }

    const handleClick = (event) => {
        setLoadingForm(true)
        event.preventDefault()
        CreateTrip()
    }

    const listOfPlanets = planets.map((item) => {
        return (
            <option key={item.id} value={item.planet}> {item.planet} </option>
        )
    })

    const date = new Date()
    const day = date.getDate();
    const month = ( date.getMonth() > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`);
    const year = date.getFullYear();
    const today = `${year}-${month}-${day}`
   
    return (
        <div>

        {loadingForm && <Loader><img src={Loading} alt="Carregando"/></Loader>}
        
        <AppForm onSubmit={handleClick}>
            
            <label htmlFor="name"> Nome </label>
            <input 
                name="name" 
                value={form.name} 
                type="text" 
                placeholder="Nome da Viagem" 
                onChange={onChange} 
                pattern="^.{5,}" 
                required
                autoFocus
            />
            <select 
                name="planet" 
                value={form.planet} 
                onChange={onChange} 
                required
            >
                <option defaultValue="" selected>Planeta</option>
                {listOfPlanets}
            </select>

            <label htmlFor="date"> Data de Início</label>
            <input 
                name="date" 
                value={form.date} 
                type="date" 
                placeholder="Data de início da viagem" 
                onChange={onChange}
                min={today}
                required
            />

            <label htmlFor="description"> Descrição </label>
            <input 
                name="description" 
                value={form.description} 
                type="text" 
                placeholder="Descrição da viagem" 
                onChange={onChange} 
                pattern="^.{30,}" 
                required
            />

            <label htmlFor="durationInDays"> Duração em dias </label>
            <input 
                name="durationInDays" 
                value={form.durationInDays} 
                type="number" 
                placeholder="Duração da viagem (em dias)" 
                onChange={onChange}
                min={50}
                required
            />
            <button>Criar</button>
        </AppForm>
        </div>
    )
}

export default CreateTripForm