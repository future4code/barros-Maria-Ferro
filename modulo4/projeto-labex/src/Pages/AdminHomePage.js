import React from "react";
import { ButtonsDiv, Button, Pages, Title } from "./style";
import { useNavigate } from "react-router-dom";
import ManageTrips from "../Components/ManageTrips/ManageTrips";


function AdminHomePage() {

    const navigate = useNavigate()

    return (
        <Pages>
            <Title>Painel Administrativo</Title>
            <ButtonsDiv>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                <Button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</Button>
                <Button>Logout</Button>
            </ButtonsDiv>
            <ManageTrips/>
        </Pages>
    )
}

export default AdminHomePage