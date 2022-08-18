import React from "react";
import CreateTripForm from "../Components/Forms/CreateTripForm";
import useProtectedPage from "../Hooks/useProtectedPage";
import { Pages, Title } from "./style";

function CreateTripPage() {

    useProtectedPage()

    return (
        <div>
        <Pages>
            <Title>
                Criar Viagem
            </Title>
            <CreateTripForm/>
        </Pages>
        </div>
    )
}

export default CreateTripPage