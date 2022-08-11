import React from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import Loading from '../../Images/Loading-Labex.svg'
import { BASE_URL } from "../../Constants/Constants";
import { AllTripsContainer } from "../Trips/style";
import { ManageTripContainer } from "./style";
import axios from "axios";
import Delete from "../../Images/Delete.png"
import { Link } from "react-router-dom";

function ManageTrips() {

    const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

    const DeleteTrip = (tripId) => {

        const message = "Tem certeza que deseja excluir esta viagem?"

        if(window.confirm(message)) {
            axios.delete(`${BASE_URL}/trips/${tripId}`, {
            headers: {
                "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k"
            }
        })
            .then((response) => {
                window.alert("Viagem excluída com sucesso")
            })
            .catch((error) => {
                console.log(error.response.data)
            })
        }
    }

    const tripsList = trips && trips.map((trip) => {

        const link = `/admin/trips/${trip.id}`

        return (
            <ManageTripContainer>
                <li key={trip.id}>
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
            {!isLoading && trips && trips.length > 0 && (
                <AllTripsContainer>
                    <ul>{tripsList}</ul>
                </AllTripsContainer>
            )}
            {!isLoading && trips && trips.length === 0 && <p>Nenhuma viagem disponível.</p>}
        </div>
    )
}

export default ManageTrips