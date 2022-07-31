import React, { useState } from "react";
import Cadastro from "../Cadastro/Cadastro";
import ListaUsuários from "../ListaUsuários/ListaUsuários";

function SeletorPágina() {
    
    const [inicial, setInicial] = useState("Cadastro")

    switch(inicial) {
        case "Cadastro":
            return <Cadastro estado={setInicial}/>
        case "Usuários":
            return <ListaUsuários estado={setInicial}/>
        default:
            return <Cadastro estado={setInicial}/>
    }

}

export default SeletorPágina