import React from "react";
import { ButtonsDiv, Button, Pages, Title } from "./style";
import { useNavigate } from "react-router-dom";
import ManageTrips from "../Components/ManageTrips/ManageTrips";
import useProtectedPage from "../Hooks/useProtectedPage";


function AdminHomePage() {

    useProtectedPage()
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <Pages>
            <Title>Painel Administrativo</Title>
            <ButtonsDiv>
                <Button onClick={() => navigate("/")}>Voltar</Button>
                <Button onClick={() => navigate("/admin/trips/create")}>Criar Viagem</Button>
                <Button onClick={logout}>Logout</Button>
            </ButtonsDiv>
            <ManageTrips/>
        </Pages>
    )
}

export default AdminHomePage