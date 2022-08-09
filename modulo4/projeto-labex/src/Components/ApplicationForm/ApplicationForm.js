import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AppForm } from "./style";
import { useNavigate } from "react-router-dom";
import { ButtonsDiv, Button } from "../../Pages/style";

function ApplicationForm() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [inputId, setInputId] = useState("")

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

    const [tripsOptions, setTripsOptions] = useState("")

    const GetTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-ferro-barros/trips")
        .then((response) => {

            const getTripsList = response.data.trips

            const trips = getTripsList.map((trip) => {
                return (
                    <option key={trip.id} value={trip.id}> {trip.name} </option>
                )
            })

            setTripsOptions(trips)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    useEffect (() => {
        GetTrips()
      }, [])

      const onClickApply = (id) => {
        setName("")
        setAge("")
        setApplicationText("")
        setProfession("")
        setCountry("")
        ApplyToTrip(id)
      }

    return (
    
        <div>
        <AppForm>
            <select value={inputId} onChange={(e) => (setInputId(e.target.value))} placeholder="Selecione uma viagem">
                <option defaultValue={"Selecione uma viagem"}>Selecione uma viagem</option>
                {tripsOptions}
            </select>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome"/>
            <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Idade"/>
            <input value={applicationText} onChange={(e) => setApplicationText(e.target.value)} placeholder="Texto de Candidatura"/>
            <input value={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Profissão"/>
            <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder="País"/>
        </AppForm>
        <ButtonsDiv>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Button onClick={() => onClickApply(inputId)}>Enviar</Button>
        </ButtonsDiv>
        </div>
    )
}

export default ApplicationForm