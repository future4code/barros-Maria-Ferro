import React from "react";
import { Button, ButtonsDiv, Pages, Title } from "./style";
import { useNavigate } from "react-router-dom";
import Logo from "../Images/Logo.png"
import Private from "../Images/Private.png"

function HomePage() {

    const navigate = useNavigate()

    return (
        <Pages>
            <Title>
                <img src={Logo} alt="Espaço-nave voando em volta de um planeta"/>LabeX
            </Title>
            <ButtonsDiv>
                <Button onClick={() => navigate("/trips/list")}>Ver Viagens</Button>
                <Button onClick={() => navigate("/login")}>Área Admin<img src={Private} alt="Cadeado"/></Button>
            </ButtonsDiv>
        </Pages>
    )
}

export default HomePage