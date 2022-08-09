import React, { useEffect, useState } from "react";
import axios from "axios";
import { AllTripsContainer, TripContainer } from "./style";

function Trip() {

    const [tripsList, setTripsList] = useState("")

    const GetTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-ferro-barros/trips")
        .then((response) => {

            const getTripsList = response.data.trips

            const trips = getTripsList.map((trip, index) => {
                return (
                    <TripContainer>
                    <li key={trip.id}>
                    <p><span>Nome:</span> {trip.name}</p>
                    <p><span>Descrição:</span> {trip.description}</p>
                    <p><span>Planeta:</span> {trip.planet}</p>
                    <p><span>Duração:</span> {trip.durationInDays} dias</p>
                    <p><span>Data:</span> {trip.date}</p>
                    </li>
                    </TripContainer>
                )
            })

            setTripsList(trips)

        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    useEffect (() => {
        GetTrips()
      }, [])

    return (
        <AllTripsContainer>
            <ul>{tripsList}</ul>
        </AllTripsContainer>
    )
}

export default Trip