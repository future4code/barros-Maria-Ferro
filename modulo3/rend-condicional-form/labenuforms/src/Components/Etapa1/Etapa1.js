import React, { useState } from "react";
import { FormsSection, InputForms, InputLabels } from "./style";

function Etapa1(props) {

    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [email, setEmail] = useState("")
    const [schooling, setSchooling] = useState("")

    switch(schooling) {
        case "médio-incompleto":
            props.nextStage(3)
            break;
        case "médio-completo":
            props.nextStage(3)
            break;
        case "superior-incompleto":
            props.nextStage(2)
            break;
        case "superior-completo":
            props.nextStage(2)
            break;
        default:
            props.nextStage(1)
            break
    }

    
    return (
        <FormsSection> Etapa 1 - Dados Gerais
                <InputLabels> Nome Completo
                    <InputForms type="text" placeholder="Digite aqui" value={name} onChange={(e)=>setName(e.target.value)}/>
                </InputLabels>
                <InputLabels> Idade
                    <InputForms type="number" placeholder="Digite aqui" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </InputLabels>
                <InputLabels> E-mail
                    <InputForms type="email" placeholder="Digite aqui" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </InputLabels>
                <InputLabels> Qual o seu grau de escolaridade?
                    <select value={schooling} onChange={(e)=>setSchooling(e.target.value)}>
                        <option defaultValue={""}>Selecione para seguir...</option>
                        <option value="médio-incompleto">Ensino Médio Incompleto</option>
                        <option value="médio-completo">Ensino Médio Completo</option>
                        <option value="superior-incompleto">Ensino Superior Incompleto</option>
                        <option value="superior-completo">Ensino Superior Completo</option>
                    </select>
                </InputLabels>
        </FormsSection>
    )

}

export default Etapa1;