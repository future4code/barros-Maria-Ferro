import React from "react";
import {Inputs, Formulário,} from './style'

function InputMensagem (props) {
    return (
        <Formulário>
            <Inputs type="text" value={props.textoInput} placeholder={props.nomeInput} onChange={props.onChangeInput} largura={props.largura}/>
        </Formulário>
    )
}

export default InputMensagem