import React, { useState } from "react";
import { FormsSection, InputForms, InputLabels } from "../Etapa1/style.js";

function Etapa3() {

    const [motive, setMotive] = useState("")
    const [extra, setExtra] = useState("")

    return (
        <FormsSection> Etapa 3 - Informações sobre quem não se formou no ensino superior, nem está cursando:
                <InputLabels> Por que você não terminou um curso de graduação?
                    <InputForms type="text" placeholder="Digite aqui" value={motive} onChange={(e)=>setMotive(e.target.value)}/>
                </InputLabels>
                <InputLabels> Você fez algum curso complementar?
                    <select value={extra} onChange={(e)=>setExtra(e.target.value)}>
                        <option defaultValue={""} disabled></option>
                        <option value="técnico">Curso Técnico</option>
                        <option value="inglês">Curso de Inglês</option>
                        <option value="nenhum">Não fiz curso complementar</option>
                    </select>
                </InputLabels>
        </FormsSection>
    )

}

export default Etapa3;