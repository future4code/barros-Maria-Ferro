import React from "react";
import { useState } from "react";
import TelaPerfis from "../TelaPerfis/TelaPerfis";
import TelaMatches from "../TelaMatches/TelaMatches";

function SeletorPágina() {
    const [página, setPágina] = useState(false)

    if (!página) {
        return <TelaPerfis estado={setPágina}/>
    } else {
        return <TelaMatches estado={setPágina}/>
    }
}

export default SeletorPágina