import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { goToHome } from "../../routers/Coordinator";
import { SuccessStyle } from "./style";

export default function EndPage() {
    const navigate = useNavigate();

    setTimeout(() => {
        goToHome(navigate)
    }, 3000);
    
    return (
        <>
            <Header/>
            <SuccessStyle>
                <h1>Pedido adicionado com sucesso!</h1>
                <h2>Obrigada pela preferência.</h2>
            </SuccessStyle>
            <Footer/>
        </>
    )
}