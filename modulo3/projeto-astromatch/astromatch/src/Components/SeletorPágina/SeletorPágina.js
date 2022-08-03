import React from "react";
import { useState } from "react";
import TelaPerfis from "../TelaPerfis/TelaPerfis";
import TelaMatches from "../TelaMatches/TelaMatches";

function SeletorPágina(props) {

    const [página, setPágina] = useState(false)

    if (!página) {
        return <TelaPerfis estado={setPágina} fimperfis={props.fimperfis}/>
    } else {
        return <TelaMatches estado={setPágina}/>
    }
}

export default SeletorPágina