import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Forms/LoginForm";
import { Pages, Title, Button, ButtonsDiv } from "./style";

function LoginPage() {

    const navigate = useNavigate()

    return (
        <div>
        <Pages>
            <Title> Login </Title>
            <LoginForm/>
        </Pages>
        <ButtonsDiv>
            <Button onClick={() => navigate("/")}>Voltar</Button>
        </ButtonsDiv>
        </div>
    )
}

export default LoginPage