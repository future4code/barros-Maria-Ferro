import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRequestData } from "../../Hooks/useRequestData";
import useForm from "../../Hooks/useForm";
import CountriesList from '../CountriesList.json'
import { BASE_URL } from "../../Constants/Constants";
import { AppForm, Loader } from "./style";
import Loading from '../../Images/Loading-Labex.svg'

function ApplicationForm() {

    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
    const [form, onChange, clear] = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [inputId, setInputId] = useState("")
    const countries = CountriesList
    const [loadingForm, setLoadingForm] = useState(false)

    const ApplyToTrip = (tripId) => {

        axios.post(`${BASE_URL}/trips/${tripId}/apply`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((response) => {
            setLoadingForm(false)
            window.alert("Inscrição realizada com sucesso! Aguarde novidades.")
            clear()
        })
        .catch((error) => {
            setLoadingForm(false)
            window.alert("ERRO! Verifique as informações e tente novamente. Não esqueça de selecionar uma viagem!")
        })
    }

    // FUNÇÃO BOTÃO DE ENVIAR FORMULÁRIO

    const handleClick = (event) => {
        event.preventDefault()
        ApplyToTrip(inputId)
        setLoadingForm(true)
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
        
        {loadingForm && <Loader><img src={Loading} alt="Carregando"/></Loader>}

        <AppForm onSubmit={handleClick}>
            {isLoading && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option>Selecione uma viagem</option>
                    <option>Carregando...</option>
                </select>
            )}
            {!isLoading && error && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option>Selecione uma viagem</option>
                    <option>Ocorreu um erro.</option>
                </select>
            )}
            {!isLoading && dataTrips && dataTrips.trips.length > 0 && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))} autoFocus>
                    <option>Selecione uma viagem</option>
                    {tripsList}
                </select>
            )}
            {!isLoading && dataTrips && dataTrips.trips.length === 0 && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option>Selecione uma viagem</option>
                    <option>Nenhuma viagem disponível.</option>
                </select>
            )}

            <label htmlFor="name"> Nome </label>
            <input 
                name="name" 
                value={form.name} 
                onChange={onChange} 
                placeholder="Nome"
                pattern="[\s\S]{3,}"
                type="text"
                required
            />

            <label htmlFor="age"> Idade </label>
            <input 
                name="age" 
                value={form.age} 
                onChange={onChange}  
                placeholder="Idade"
                type="number"
                min={18}
                required
            />

            <label htmlFor="applicationText"> Texto de Candidatura </label>
            <input 
                name="applicationText" 
                value={form.applicationText} 
                onChange={onChange} 
                placeholder="Texto de Candidatura"
                type="text"
                pattern="[\s\S]{30,}"
                required
            />

            <label htmlFor="profession"> Profissão </label>
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
        </div>
    )
}

export default ApplicationForm