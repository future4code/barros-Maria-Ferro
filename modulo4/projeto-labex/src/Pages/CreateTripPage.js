import React from "react";
import CreateTripForm from "../Components/Forms/CreateTripForm";
import useProtectedPage from "../Hooks/useProtectedPage";
import { Pages, Title, Button, ButtonsDiv } from "./style";
import { useNavigate } from "react-router-dom";

function CreateTripPage() {

    useProtectedPage()
    const navigate = useNavigate()

    return (
        <div>
        <Pages>
            <Title>
                Criar Viagem
            </Title>
            <CreateTripForm/>
            <ButtonsDiv>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </ButtonsDiv>
        </Pages>
        </div>
    )
}

export default CreateTripPage