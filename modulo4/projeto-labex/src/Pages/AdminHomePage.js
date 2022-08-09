import React from "react";
import { ButtonsDiv, Button, Pages, Title } from "./style";
import { useNavigate } from "react-router-dom";

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
        </Pages>
    )
}

export default AdminHomePage