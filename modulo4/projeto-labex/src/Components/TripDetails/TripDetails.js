import React, { useEffect, useState } from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Constants";
import { useParams } from "react-router-dom";
import { CandidateContainer, TitleDetailsPage, TripDetailsContainer } from "./style";
import Loading from '../../Images/Loading-Labex.svg'
import { Button, ButtonsDiv, Title } from "../../Pages/style";
import axios from "axios";
import { TripContainer } from '../Trips/style'

function TripDetails() {

    const pathParams = useParams();
    const tripId = pathParams.id
    const [dataTrip, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
    const [tripInfo, setTripInfo] = useState("")

    const definePage = dataTrip && dataTrip.trips.filter((trip) => {
       return tripId === trip.id
    })

    const title = definePage && definePage.map((trip) => {
        return <TitleDetailsPage key={trip.id}> {trip.name} </TitleDetailsPage>
    })

    const GetTripDetail = () => {
        axios.get(`${BASE_URL}/trip/${tripId}`, {
            headers: {
                "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkYxYUVkNXJBakdPalo0bnBveUtOIiwiZW1haWwiOiJtYXJpYS1mZXJyby1iYXJyb3NAZ21haWwuY29tIiwiaWF0IjoxNjYwNjUzNTA2fQ.YvlBF2meLBrPvyaV5AbmzaJJCxWbZSrkkFNf8zvVL1s"
            }
        })
        .then((response) => {
            setTripInfo(response.data.trip)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    const listInfo = tripInfo && (
        <TripContainer key={tripInfo.id}>
            <li>
                <p>{tripInfo.name}</p>
                <p>{tripInfo.description}</p>
                <p>{tripInfo.planet}</p>
                <p>{tripInfo.durationInDays} dias | {tripInfo.date}</p>
            </li>
        </TripContainer>)
    
    const listCandidates = tripInfo && tripInfo.candidates.map((person) => {
        return (
        <CandidateContainer key={person.id}>
            <li>
                <p>Nome: <span>{person.name}</span></p>
                <p>Idade: <span>{person.age} anos</span></p>
                <p>Texto de aplicação: <span>{person.applicationText}</span> </p>
                <p>País: <span>{person.country}</span> </p>
                <p>Profissão: <span>{person.profession}</span></p>
                <ButtonsDiv>
                    <Button>Aprovar</Button>
                    <Button>Recusar</Button>
                </ButtonsDiv>
            </li>
        </CandidateContainer>
        )
    })

    useEffect (() => {
        GetTripDetail()
      }, [])


    return (
        <TripDetailsContainer>
            {isLoading && <img src={Loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && dataTrip.trips.length > 0 && <span>{title}</span>}
            {!isLoading && dataTrip && dataTrip.trips.length === 0 && <p>Nenhuma viagem disponível.</p>}

            {listInfo}

            <Title>Candidatos Pendentes</Title>

            {listCandidates}

            <Title>Candidatos Aprovados</Title>
        </TripDetailsContainer>
    )
}

export default TripDetails