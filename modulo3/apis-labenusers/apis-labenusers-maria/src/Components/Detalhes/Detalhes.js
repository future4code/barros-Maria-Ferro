import React from "react";
import { DetalhesPg } from "./style";

function Detalhes(props) {
    
    return (
    <DetalhesPg>
        <h1>Detalhes Usuário</h1>
        <p>Nome: {props.nome}</p>
        <p>E-mail: {props.email}</p>
        <button onClick={props.fechar}> Fechar </button>     
    </DetalhesPg>

    )
}

export default Detalhes