import React from "react";
import axios from "axios";
import { useState } from "react";
import { AppForm } from "./style";
import { useNavigate } from "react-router-dom";
import { ButtonsDiv, Button } from "../../Pages/style";
import { useRequestData } from "../../Hooks/useRequestData";
import CountriesList from '../CountriesList.json'
import { BASE_URL } from "../../Constants/Constants";

function ApplicationForm() {

    const navigate = useNavigate()

    const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [inputId, setInputId] = useState("")
    const [countries] = useState(CountriesList)

    const ApplyToTrip = (tripId) => {

        const body =
            {
                name,
                age,
                applicationText,
                profession,
                country
            }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-ferro-barros/trips/${tripId}/apply`, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    // FUNÇÃO BOTÃO DE ENVIAR FORMULÁRIO

    const onClickApply = (id) => {
        setName("")
        setAge("")
        setApplicationText("")
        setProfession("")
        setCountry("")
        ApplyToTrip(id)
    }

    // RENDERIZAR OPÇÕES DE VIAGENS E PAÍSES NO FORMULÁRIO

    const tripsList = trips && trips.map((trip) => {
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
        <AppForm>
            {isLoading && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue={"Selecione uma viagem"}>Selecione uma viagem</option>
                    <option>Carregando...</option>
                </select>
            )}
            {!isLoading && error && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue={"Selecione uma viagem"}>Selecione uma viagem</option>
                    <option>Ocorreu um erro.</option>
                </select>
            )}
            {!isLoading && trips && trips.length > 0 && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue={"Selecione uma viagem"}>Selecione uma viagem</option>
                    {tripsList}
                </select>
            )}
            {!isLoading && trips && trips.length === 0 && (
                <select value={inputId} onChange={(e) => (setInputId(e.target.value))}>
                    <option defaultValue={"Selecione uma viagem"}>Selecione uma viagem</option>
                    <option>Nenhuma viagem disponível.</option>
                </select>
            )}

            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
            <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade"/>
            <input value={applicationText} onChange={(e) => setApplicationText(e.target.value)} placeholder="Texto de Candidatura"/>
            <input value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profissão"/>
            <select value={country} onChange={(e) => (setCountry(e.target.value))}>
                <option defaultValue={"Selecione um país"}>País</option>
                {listOfCountries}
            </select>
        </AppForm>
        
        <ButtonsDiv>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Button onClick={() => onClickApply(inputId)}>Enviar</Button>
        </ButtonsDiv>
        </div>
    )
}

export default ApplicationForm