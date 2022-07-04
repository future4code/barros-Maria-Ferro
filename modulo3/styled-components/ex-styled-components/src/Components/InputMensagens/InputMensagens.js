import React from "react";
import {Inputs, CampoEscrita} from './style'

function InputMensagem (props) {
    return (
        <CampoEscrita>
            <label for={props.forInput}> {props.tituloInput} </label>
            <Inputs type="text" value={props.tipoInput} onChange={props.onChangeInput}/>
        </CampoEscrita>
    )
}

export default InputMensagem