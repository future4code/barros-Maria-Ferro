import React from "react";
import { Button, ButtonsDiv, Pages, Title } from "./style";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate()

    return (
        <Pages>
            <Title>
                LabeX
            </Title>
            <ButtonsDiv>
                <Button onClick={() => navigate("/trips/list")}>Ver Viagens</Button>
                <Button onClick={() => navigate("/login")}>Área Admin</Button>
            </ButtonsDiv>
        </Pages>
    )
}

export default HomePage