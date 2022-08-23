import React from "react";
import ApplicationForm from "../Components/Forms/ApplicationForm";
import { Pages, Title, Button, ButtonsDiv } from "./style";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage() {

    const navigate = useNavigate()

    return (
        <Pages>
            <Title>
                Inscreva-se para uma viagem
            </Title>
            <ApplicationForm/>
            <ButtonsDiv>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </ButtonsDiv>
        </Pages>
    )
}

export default ApplicationFormPage