import React from "react";
import { Button, ButtonsDiv, Pages, Title } from "./style";
import { useNavigate } from "react-router-dom";
import TripsList from "../Components/TripsList/TripsList";

function ListTripsPage() {

    const navigate = useNavigate()

    return (
        <Pages>
            <Title>
                Lista de Viagens
            </Title>
            <ButtonsDiv>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={() => navigate("/trips/application")}>Inscrever-se</Button>
            </ButtonsDiv>
            <TripsList/>
        </Pages>
    )
}

export default ListTripsPage