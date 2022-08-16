import React from "react";
import CreateTripForm from "../Components/Forms/CreateTripForm";
import { Pages, Title } from "./style";

function CreateTripPage() {

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