import React from "react";
import { BotãoEstilo } from "./style";

function Botão (props) {
    return (
        <BotãoEstilo onClick={props.onClickBotao}>Enviar Mensagem</BotãoEstilo>
    )
}

export default Botão