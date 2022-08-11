import React from "react";
import { AllTripsContainer, TripContainer } from "./style";
import { useRequestData } from "../../Hooks/useRequestData";
import Loading from '../../Images/Loading-Labex.svg'
import { BASE_URL } from "../../Constants/Constants";

function Trips() {

    const [dataTrips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

        const tripsList = dataTrips && dataTrips.trips.map((trip) => {
            return (
                <TripContainer key={trip.id}>
                    <li>
                        <p>{trip.name}</p>
                        <p>{trip.description}</p>
                        <p>{trip.planet}</p>
                        <p>{trip.durationInDays} dias | {trip.date}</p>
                    </li>
                </TripContainer>
            )
        })

    return (
        <div>
        {isLoading && <img src={Loading} alt="Carregando"/>}
        {!isLoading && error && <p>Ocorreu um erro.</p>}
        {!isLoading && dataTrips && dataTrips.trips.length > 0 && (
            <AllTripsContainer>
                <ul>{tripsList}</ul>
            </AllTripsContainer>
        )}
        {!isLoading && dataTrips && dataTrips.trips.length === 0 && <p>Nenhuma viagem disponível.</p>}
        </div>
    )
}

export default Trips