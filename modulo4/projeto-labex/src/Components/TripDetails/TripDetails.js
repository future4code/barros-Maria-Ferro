import React from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Constants";
import { useParams } from "react-router-dom";
import { ApprovedCandidatesContainer, CandidateContainer, TitleDetailsPage, TripDetailsContainer } from "./style";
import Loading from '../../Images/Loading-Labex.svg'
import { Button, ButtonsDiv, Title } from "../../Pages/style";
import { TripContainer } from '../TripsList/style'
import axios from "axios";

function TripDetails() {

    const pathParams = useParams();
    const tripId = pathParams.id
    const token = window.localStorage.getItem("token")
    const [dataTrip, isLoading, error, reload, setReload] = useRequestData(`${BASE_URL}/trip/${tripId}`, {headers: {
        auth: token
    }})

    const title = dataTrip && <TitleDetailsPage> {dataTrip.trip.name} </TitleDetailsPage>

    const listInfo = dataTrip && (
        <TripContainer>
            <p>{dataTrip.trip.description}</p>
            <p>{dataTrip.trip.planet}</p>
            <p>{dataTrip.trip.durationInDays} dias | {dataTrip.trip.date}</p>
        </TripContainer>)

    const DecideCandidate = (candidateId, decide) => {

        const body = {
            "approve": decide
        }

        axios.put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                "Content-Type" : "application/json",
                "auth": token
            }
        })
        .then((response) => {
            if(decide) {
                window.alert("Candidato aprovado!")
                setReload(!reload)
            } else {
                window.alert("Candidato recusado.")
                setReload(!reload)
            }
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }
    
    const listCandidates = dataTrip && dataTrip.trip.candidates.map((person) => {
        return (
        <CandidateContainer key={person.id}>
            <p>Nome: <span>{person.name}</span></p>
            <p>Idade: <span>{person.age} anos</span></p>
            <p>Texto de aplicação: <span>{person.applicationText}</span> </p>
            <p>País: <span>{person.country}</span> </p>
            <p>Profissão: <span>{person.profession}</span></p>
            <ButtonsDiv>
                <Button onClick={()=> {DecideCandidate(person.id, true)}}>Aprovar</Button>
                <Button onClick={()=> {DecideCandidate(person.id, false)}}>Recusar</Button>
            </ButtonsDiv>
        </CandidateContainer>
        )
    })

    const listApprovedCandidates = dataTrip && dataTrip.trip.approved.map((person) => {
       return <ApprovedCandidatesContainer key={person.id}>
        <p>{person.name}, {person.age} anos, {person.country}</p>
        </ApprovedCandidatesContainer>
    })

    return (
        <TripDetailsContainer>
            {isLoading && <img src={Loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && <span>{title}</span>}

            {isLoading && <img src={Loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && <div>{listInfo}</div>}

            <Title>Candidatos Pendentes</Title>

            {isLoading && <img src={Loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && dataTrip.trip.candidates.length > 0 && <ul>{listCandidates}</ul>}
            {!isLoading && dataTrip && dataTrip.trip.candidates.length === 0 && <p>Nenhum novo candidato inscrito.</p>}

            <Title>Candidatos Aprovados</Title>

            {isLoading && <img src={Loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && dataTrip.trip.approved.length > 0 && <ul>{listApprovedCandidates}</ul>}
            {!isLoading && dataTrip && dataTrip.trip.approved.length === 0 && <p>Nenhum candidato aprovado.</p>}
        </TripDetailsContainer>
    )
}

export default TripDetails