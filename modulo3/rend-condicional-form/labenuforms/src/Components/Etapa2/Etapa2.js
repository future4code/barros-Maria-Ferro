import React, { useState } from "react";
import { FormsSection, InputForms, InputLabels } from "../Etapa1/style.js";

function Etapa2() {

    const [major, setMajor] = useState("")
    const [school, setSchool] = useState("")

    return (
        <FormsSection> Etapa 2 - Informações educacionais para quem está cursando (ou já terminou) o ensino superior:
                <InputLabels> Qual o curso?
                    <InputForms type="text" placeholder="Digite aqui" value={major} onChange={(e)=>setMajor(e.target.value)}/>
                </InputLabels>
                <InputLabels> Qual a unidade de ensino?
                    <InputForms type="text" placeholder="Digite aqui" value={school} onChange={(e)=>setSchool(e.target.value)}/>
                </InputLabels>
        </FormsSection>
    )

}

export default Etapa2;