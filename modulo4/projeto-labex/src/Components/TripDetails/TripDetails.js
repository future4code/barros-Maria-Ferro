import React from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/Constants";
import { useParams } from "react-router-dom";
import { TitleDetailsPage, TripDetailsContainer } from "./style";
import Loading from '../../Images/Loading-Labex.svg'
import { Title } from "../../Pages/style";

function TripDetails() {

    const pathParams = useParams();
    const tripId = pathParams.id

    const [trip, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

    const definePage = trip && trip.filter((trip) => {
       return tripId === trip.id
    })

    const title = definePage && definePage.map((trip) => {
        return <TitleDetailsPage key={trip.id}> {trip.name} </TitleDetailsPage>
    })

    return (
        <TripDetailsContainer>
        {isLoading && <img src={Loading} alt="Carregando"/>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && trip && trip.length > 0 && <span>{title}</span>}
        {!isLoading && trip && trip.length === 0 && <p>Nenhuma viagem disponível.</p>}
        <Title>Candidatos Pendentes</Title>
        <Title>Candidatos Aprovados</Title>
        </TripDetailsContainer>
    )
}

export default TripDetails