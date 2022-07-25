import React, { useState } from "react";
import logo from './img/logo.svg'
import { Body, Cabeçalho, Rodape, Sidebar, Imagem, Principal, LinhaMensagem, SeçãoMensagens, SeçãoInputs, Mensagem } from "./style";
import Botão from "./Components/Botão/Botão";
import InputMensagem from "./Components/InputMensagens/InputMensagens";

function App() {

  const [remetente, setRemetente] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [listaMensagens, setlistaMensagens] = useState([])

  const historico = listaMensagens.map((valor, index) => {
    if (valor.rmt === "eu") {
      return (
      <li>
      <LinhaMensagem lado="flex-end" displayR="none" onDoubleClick={() => deletarMensagem(index)}>
      <Mensagem corFundo="#FFA500" key={index}><p>{valor.rmt}</p> <p>{valor.msg}</p></Mensagem>
      </LinhaMensagem>
      </li>
      )} else {
        return (
        <li>
        <LinhaMensagem lado="flex-start" displayR="inherit" onDoubleClick={() => deletarMensagem(index)}>
        <Mensagem corFundo="#fcd690" key={index}><p>{valor.rmt}</p> <p>{valor.msg}</p></Mensagem>
        </LinhaMensagem>
        </li>
        )
      }
  })

  const handleInputRemetente = (e) => {
    setRemetente(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setMensagem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const novasMensagens = [...listaMensagens, {rmt: remetente, msg: mensagem}]
    setlistaMensagens(novasMensagens)
    setRemetente("")
    setMensagem("")
  }

  const deletarMensagem = (indexR) => {
    const mensagensRemover = listaMensagens.filter((valor, index) => {return index !== indexR})
    setlistaMensagens(mensagensRemover)
  }

  return (
    <Body>
      <Cabeçalho><Imagem src={logo}/><h1>WhatsLab</h1></Cabeçalho>
      <Principal>
        <Sidebar/>
        <SeçãoMensagens>
            <ul>{historico}</ul>
            <SeçãoInputs onSubmit={handleSubmit}>
                <InputMensagem 
                    nomeInput="Remetente" 
                    textoInput={remetente} 
                    onChangeInput={handleInputRemetente} 
                    largura="180px"
                />
                 <InputMensagem 
                    nomeInput="Mensagem" 
                    textoInput={mensagem} 
                    onChangeInput={handleInputMensagem} 
                    largura="370px"
                />
                <Botão 
                    type="submit"
                ></Botão>
            </SeçãoInputs>
        </SeçãoMensagens>
        <Sidebar/>
      </Principal>
      <Rodape><span>Copyright ® 2022 Labenu All rights reserved R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</span></Rodape>
    </Body>
  );
}

export default App;