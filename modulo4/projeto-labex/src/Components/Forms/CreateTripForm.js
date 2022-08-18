import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Constants";
import useForm from "../../Hooks/useForm";
import { Button, ButtonsDiv } from "../../Pages/style";
import { AppForm } from "./style";
import PlanetsList from '../PlanetsList.json'

function CreateTripForm() {
    
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm( { name: "", planet: "", date: "", description: "", durationInDays: "" })
    const planets = PlanetsList
    const token = window.localStorage.getItem("token")

    const CreateTrip = () => {
        axios.post(`${BASE_URL}/trips`, form, {
            headers: {
                "Content-Type": "application/json",
                "auth": token
            }
        })
        .then((response) => {
            window.alert("Viagem criada com sucesso!")
            clear()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    const handleClick = (event) => {
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
        <AppForm onSubmit={handleClick}>
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
            <input 
                name="date" 
                value={form.date} 
                type="date" 
                placeholder="Data de início da viagem" 
                onChange={onChange}
                min={today}
                required
            />
            <input 
                name="description" 
                value={form.description} 
                type="text" 
                placeholder="Descrição da viagem" 
                onChange={onChange} 
                pattern="^.{30,}" 
                required
            />
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
        <ButtonsDiv>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
        </ButtonsDiv>
        </div>
    )
}

export default CreateTripForm