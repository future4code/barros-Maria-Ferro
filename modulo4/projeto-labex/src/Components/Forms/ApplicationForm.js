import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import useForm from "../../Hooks/useForm";
import CountriesList from '../CountriesList.json'
import { BASE_URL } from "../../Constants/Constants";
import { AppForm } from "./style";
import { ButtonsDiv, Button } from "../../Pages/style";

function ApplicationForm() {

    const navigate = useNavigate()

    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [inputId, setInputId] = useState("")
    const countries = CountriesList

    const ApplyToTrip = (tripId) => {

        axios.post(`${BASE_URL}/trips/${tripId}/apply`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((response) => {
            window.alert("Inscrição realizada com sucesso! Aguarde novidades.")
            clear()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    // FUNÇÃO BOTÃO DE ENVIAR FORMULÁRIO

    const handleClick = (event) => {
        event.preventDefault()
        ApplyToTrip(inputId)
    }

    // RENDERIZAR OPÇÕES DE VIAGENS E PAÍSES NO FORMULÁRIO

    const tripsList = dataTrips && dataTrips.trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}> {trip.name} </option>
        )
    })

    const listOfCountries = countries.map((item) => {
        return (
            <option key={item.sigla} value={item.nome_pais}> {item.nome_pais} </option>
        )
    })
    
    return (
        <div>
        <AppForm onSubmit={handleClick}>
            {isLoading && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue="" selected>Selecione uma viagem</option>
                    <option>Carregando...</option>
                </select>
            )}
            {!isLoading && error && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue="" selected>Selecione uma viagem</option>
                    <option>Ocorreu um erro.</option>
                </select>
            )}
            {!isLoading && dataTrips && dataTrips.trips.length > 0 && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))} autoFocus>
                    <option defaultValue="" selected>Selecione uma viagem</option>
                    {tripsList}
                </select>
            )}
            {!isLoading && dataTrips && dataTrips.trips.length === 0 && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue="" selected>Selecione uma viagem</option>
                    <option>Nenhuma viagem disponível.</option>
                </select>
            )}

            <input 
                name="name" 
                value={form.name} 
                onChange={onChange} 
                placeholder="Nome"
                pattern="[\s\S]{3,}"
                type="text"
                required
            />
            <input 
                name="age" 
                value={form.age} 
                onChange={onChange}  
                placeholder="Idade"
                type="number"
                min={18}
                required
            />
            <input 
                name="applicationText" 
                value={form.applicationText} 
                onChange={onChange} 
                placeholder="Texto de Candidatura"
                type="text"
                pattern="[\s\S]{30,}"
                required
            />
            <input 
                name="profession" 
                value={form.profession} 
                onChange={onChange} 
                placeholder="Profissão"
                type="text"
                pattern="[\s\S]{8,}"
                required
            />
            <select 
                name="country" 
                value={form.country} 
                onChange={onChange} 
                required
            >
                <option defaultValue="" selected>País</option>
                {listOfCountries}
            </select>
            <button>Enviar</button>
            </AppForm>
            <ButtonsDiv>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </ButtonsDiv>
        </div>
    )
}

export default ApplicationForm