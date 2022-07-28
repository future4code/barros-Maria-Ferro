import React, {useState} from "react";
import axios from 'axios';
import { CadastroPg } from './style';

function Cadastro(props) {
    
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    const novoNome = (e) => {
    setInputName(e.target.value)
    }

    const novoEmail = (e) => {
    setInputEmail(e.target.value)
    }

    const adicionarInfo = (e) => {
    e.preventDefault()
    createUsers()
    setInputEmail("")
    setInputName("")
    }

    const createUsers = () => {

    const body = {
        "name": inputName,
        "email": inputEmail
    }
    axios.post ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    body, 
    {
        headers: {
        Authorization: "maria-ferro-barros"
        }
    })
    .then((response) => {
        alert("Informações Inseridas")
    })
    .catch((error) => {
        alert("Erro! Verifique as informações.")
    })
    }

    const trocarPágina = () => {
    props.estado("Usuários")
    }

    return (
    <CadastroPg>
        <form>
        <h1>Faça seu cadastro:</h1>
        <label>Nome:</label>
        <input type="text" value={inputName} onChange={novoNome}/>
        <label>E-mail:</label>
        <input type="email" value={inputEmail} onChange={novoEmail}/>
        <button onClick={adicionarInfo}>Enviar</button>
        </form>
        <br/>
        <button onClick={trocarPágina}>Lista de Usuários</button>
    </CadastroPg>
    )
}

export default Cadastro