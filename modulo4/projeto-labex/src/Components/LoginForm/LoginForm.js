import React from "react";
import { AppForm } from "../ApplicationForm/style";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv } from "../../Pages/style";

function LoginForm() {

    const navigate = useNavigate()

    return (
        <div>
        <AppForm>
            <input type="email" value="E-mail" placeholder="E-mail"/>
            <input type="password" value="Senha" placeholder="Senha"/>
        </AppForm>
        <ButtonsDiv>
            <Button onClick={() => navigate(-1)}>Voltar</Button>
            <Button onClick={() => navigate("/admin/trips/list")}>Login</Button>
            {/* por enquanto está mandando pra página admin pq ainda não aprendemos a fazer o login */}
        </ButtonsDiv>
        </div>
    )
}

export default LoginForm