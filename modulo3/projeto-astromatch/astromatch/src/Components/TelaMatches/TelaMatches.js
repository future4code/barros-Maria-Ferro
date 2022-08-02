import React, { useEffect, useState } from "react";
import {TelaPrincipal, TelaHeader, ListaMatches, AvatarContainer, Avatar, PerfilInfo} from "./style";
import listprofiles from "../../img/list-profiles.png"
import axios from "axios";

function TelaMatches(props) {

    const [lista, setLista] = useState([])

    const GetMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-ferro-barros/matches")
        .then((response) => {
            const listaPerfis = response.data.matches

            const definirLista = listaPerfis.map((perfil) => {
                return <li key={perfil.id}> 
                <AvatarContainer><Avatar src={perfil.photo} alt={perfil.photo_alt}></Avatar></AvatarContainer> 
                <PerfilInfo><p>{perfil.name}</p> <p>{perfil.bio}</p></PerfilInfo>
                    </li>
            })

            setLista(definirLista)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    useEffect (() => {
        GetMatches()
      }, [])

    const trocarPágina = () => {
        props.estado(false)
      }

    return (
        <TelaPrincipal>
            <TelaHeader>
            <p><span>astro</span><span>match</span></p>
            <button onClick={trocarPágina}><img src={listprofiles} alt="Botão para trocar para a tela principal"></img></button>
            </TelaHeader>
            <ListaMatches>
                {lista}
            </ListaMatches>
        </TelaPrincipal>
    )
}

export default TelaMatches