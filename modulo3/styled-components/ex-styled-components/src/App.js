import React, { useState } from "react";
import { Body, Cabeçalho, Principal, Rodape, SeçãoMensagens, Sidebar, Imagem } from './style';
import logo from './img/logo.svg'
import InputMensagem from "./Components/InputMensagens/InputMensagens";
import Botão from "./Components/Botão/Botão";


function App() {

  const [remetente, setRementente] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleInputRemetente = (e) => {
    setRementente(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setMensagem(e.target.value)
  }

  return (
    <Body>
      <Cabeçalho><Imagem src={logo}/><h1>LabZap</h1></Cabeçalho>
      <Principal>
        <Sidebar></Sidebar>
        <SeçãoMensagens>
          <InputMensagem forInput="remetente" tituloInput="Remetente: " tipoInput={remetente} onChangeInput={handleInputRemetente}/>
          <InputMensagem forInput="mensagem" tituloInput="Mensagem: " tipoInput={mensagem} onChangeInput={handleInputMensagem}/>
          <Botão></Botão>
        </SeçãoMensagens>
        <Sidebar></Sidebar>
      </Principal>
      <Rodape><span>Copyright ® 2022 Labenu All rights reserved R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</span></Rodape>
    </Body>
  );
}

export default App;
