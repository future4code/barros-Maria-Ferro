import React from "react";
import TripDetails from "../Components/TripDetails/TripDetails";
import { Button, ButtonsDiv, Pages } from "./style";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../Hooks/useProtectedPage";

function TripDetailsPage() {

    useProtectedPage()
    const navigate = useNavigate()

    return (
        <Pages>
            <TripDetails/>
            <ButtonsDiv>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
            </ButtonsDiv>
        </Pages>
    )
}

export default TripDetailsPage