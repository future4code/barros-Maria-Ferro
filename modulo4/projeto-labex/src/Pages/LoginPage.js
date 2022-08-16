import React from "react";
import LoginForm from "../Components/Forms/LoginForm";
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