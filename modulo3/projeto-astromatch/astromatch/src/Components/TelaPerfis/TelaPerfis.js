import { Botao, BotaoDislike, TelaPrincipal, TelaBotoes, TelaFoto, TelaHeader, TelaInfo } from "./style";
import listmatches from "../../img/list-matches.png"
import { useEffect, useState } from "react";
import axios from "axios";
import loader from "../../img/Loader.svg"

function TelaPerfis(props) {

  // GET PROFILE

  const [fotoPerfil, setFotoPerfil] = useState(loader)
  const [infoPerfil, setInfoPerfil] = useState([])
  const [mostrarInfo, setMostrarInfo] = useState("none")
  const [tamanhoImagem, setTamanhoImagem] = useState("45%")

  const getProfileToChoose = () => {

    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-ferro-barros/person", {
      headers: {"Access-Control-Allow-Origin": "*"} 
    })
    .then((response) => {
      setInfoPerfil(response.data.profile)
      setMostrarInfo("flex")
      setTamanhoImagem("100%")
      setFotoPerfil(response.data.profile.photo)
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  }

  useEffect (() => {
    getProfileToChoose()
  }, [])

  if (infoPerfil === null) {
    props.fimperfis()
    window.alert("Sem novos perfis disponíveis! A página será reiniciada.")
    getProfileToChoose()
  }

  // CHOOSE PERSON

  const [choice, setChoice] = useState(undefined)

  const choosePerson = (escolha) => {
    const body = {
      "id": infoPerfil.id,
      "choice": choice
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-ferro-barros/choose-person", body, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      setChoice(escolha)
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  }

  // FUNÇÕES BOTÕES

  const onClickBotões = () => {
    setMostrarInfo("none")
    setTamanhoImagem("45%")
    setFotoPerfil(loader)
    getProfileToChoose()
  }

  const onClickLike = () => {
    onClickBotões()
    choosePerson(true)
  }
  
  const onClickDislike = () => {
    onClickBotões()
    choosePerson(false)
  }

  // FUNÇÃO TROCAR DE PÁGINA

  const trocarPágina = () => {
    props.estado(true)
  }

  return (
    <TelaPrincipal>
        <TelaHeader>
          <p><span>astro</span><span>match</span></p>
          <button onClick={trocarPágina}><img src={listmatches} alt="Botão para trocar para a lista de matches"></img></button>
        </TelaHeader>
        <TelaFoto tamanhoImagem={tamanhoImagem}>
          <img src={fotoPerfil} alt={infoPerfil.photo_alt}></img>
          <TelaInfo mostrarInfo={mostrarInfo}>
            <h2>{infoPerfil.name}, {infoPerfil.age}</h2>
            <h4>{infoPerfil.bio}</h4>
          </TelaInfo>
        </TelaFoto>
        <TelaBotoes>
          <BotaoDislike onClick={onClickDislike}>X</BotaoDislike>
          <Botao onClick={onClickLike}>♥</Botao>
        </TelaBotoes>
    </TelaPrincipal>
  )
}

export default TelaPerfis