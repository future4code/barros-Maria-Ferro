import React, {useState, useEffect} from "react";
import axios from 'axios';
import { ListaUsuáriosPg } from "./style";
import Detalhes from "../Detalhes/Detalhes";

function ListaUsuários(props) {

    // GET lista de usuários

    const [usuarios, setUsuarios] = useState([])

    const getAllUsers = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "maria-ferro-barros"
            }
        })
        .then((response) => {
            setUsuarios(response.data)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    const listaUsuarios = usuarios.map((user) => {
        return (
            <li key={user.id}>
                <i>{user.name}</i>
                <button onClick={() => {getUserById(user.id)}}>Detalhes</button> 
                <button onClick={() => {deleteUser(user.id)}}>Excluir</button>
            </li>
        )
    })

    useEffect (() => {
        getAllUsers()
      }, [])

    // GET detalhes do usuário

    const [nomeUsuario, setNomeUsuario] = useState("")
    const [emailUsuario, setEmailUsuario] = useState("")
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    const infoDetalhes = <Detalhes nome={nomeUsuario} email={emailUsuario} fechar={() => {setMostrarDetalhes(false)}}/>

    const getUserById = (usuarioId) => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
            headers: {
                Authorization: "maria-ferro-barros"
            }
        })
        .then((response) => {
            setNomeUsuario(response.data.name)
            setEmailUsuario(response.data.email)
            setMostrarDetalhes(true)
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }

    // DELETE usuário

    const deleteUser = (usuarioId) => {

        const mensagem = "Tem certeza que deseja excluir?"

        if(window.confirm(mensagem)) {

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
                headers: {
                    Authorization: "maria-ferro-barros"
                }
            })
            .then((response) => {
                getAllUsers()
                alert("Usuário excluído")
            })
            .catch((error) => {
                alert("Ocorreu um erro")
            })
        } 
        
        else {
            return getAllUsers()
        }
    }

    // botão de voltar

    const voltarInicio = () => {
        props.estado("Cadastro")
    }

    return (<div>
        <ListaUsuáriosPg>
            <h1>Lista de Usuários:</h1>
            {listaUsuarios}
            <br/>
            <button onClick={voltarInicio}>Voltar</button>
        </ListaUsuáriosPg>
        {mostrarDetalhes && infoDetalhes}
        </div>
    )
}


export default ListaUsuários