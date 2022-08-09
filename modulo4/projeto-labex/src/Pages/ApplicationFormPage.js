import React from "react";
import ApplicationForm from "../Components/ApplicationForm/ApplicationForm";
import { Pages, Title } from "./style";

function ApplicationFormPage() {

    return (
        <Pages>
            <Title>
                Inscreva-se para uma viagem
            </Title>
            <ApplicationForm/>
        </Pages>
    )
}

export default ApplicationFormPage