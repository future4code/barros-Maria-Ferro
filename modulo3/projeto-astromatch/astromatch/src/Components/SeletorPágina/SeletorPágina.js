import React from "react";
import { useState } from "react";
import TelaPerfis from "../TelaPerfis/TelaPerfis";
import TelaMatches from "../TelaMatches/TelaMatches";

function SeletorPágina (props) {

    const { Clear } = props;

    const [página, setPágina] = useState(false)

    if (!página) {
        return <TelaPerfis setPágina={setPágina} Clear={Clear}/>
    } else {
        return <TelaMatches setPágina={setPágina}/>
    }
}

export default SeletorPágina