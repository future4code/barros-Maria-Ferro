import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import { Pages, Title } from "./style";

function LoginPage() {

    return (
        <Pages>
            <Title> Login </Title>
            <LoginForm></LoginForm>
        </Pages>
    )
}

export default LoginPage