import React, { useEffect, useState } from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import Loading from '../../Images/Loading-Labex.svg'
import { BASE_URL } from "../../Constants/Constants";
import { AllTripsContainer } from "../TripsList/style";
import { ManageTripContainer } from "./style";
import axios from "axios";
import Delete from "../../Images/Delete.png"
import { Link } from "react-router-dom";

function ManageTrips() {

    const [dataTrips, isLoading, error, reload, setReload] = useRequestData(`${BASE_URL}/trips`)
    const token = window.localStorage.getItem("token")

    const DeleteTrip = (tripId) => {

        const message = "Tem certeza que deseja excluir esta viagem?"

        if(window.confirm(message)) {
            axios.delete(`${BASE_URL}/trips/${tripId}`, {
            headers: {
                "auth": token
            }
        })
            .then((response) => {
                window.alert("Viagem excluída com sucesso")
                setReload(!reload)
            })
            .catch((error) => {
                console.log(error.response.data)
            })
        }
    }

    const tripsList = dataTrips && dataTrips.trips.map((trip) => {

        const link = `/admin/trips/${trip.id}`

        return (
            <ManageTripContainer key={trip.id}>
                <li>
                <Link to={link}>
                    <span>{trip.name}</span>
                </Link>
                    <button onClick={() => DeleteTrip(trip.id)}><img src={Delete} alt="Botão deletar"></img></button>
                </li>
            </ManageTripContainer>
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

export default ManageTrips