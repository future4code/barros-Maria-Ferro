import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.js'
import { EstiloForm, MainContainer } from './style.js';


function App() {

const [nomeUsuario, setnomeUsuario] = useState("")
const [fotoUsuario, setfotoUsuario] = useState("")
const [fotoPost, setfotoPost] = useState("")

const handlenomeUsuario = (e) => {
      setnomeUsuario(e.target.value);
}

const handlefotoUsuario = (e) => {
    setfotoUsuario(e.target.value)
}

const handlefotoPost = (e) => {
  setfotoPost(e.target.value)
}

const [listaPost, setlistaPost] = useState([
  {nomeUsuario: 'paulinha',
  fotoUsuario: 'https://picsum.photos/50/50',
  fotoPost: 'https://picsum.photos/200/150'},

  {nomeUsuario: 'maria',
  fotoUsuario: 'https://picsum.photos/id/1013/50/50',
  fotoPost: 'https://picsum.photos/id/237/200/150'},

  {nomeUsuario: 'matheus',
  fotoUsuario: 'https://picsum.photos/id/777/50/50',
  fotoPost: 'https://picsum.photos/id/12/200/150'},
])

const adicionarPost = () => {
  const listaAtualizada = [...listaPost, {nomeUsuario: nomeUsuario, fotoUsuario: fotoUsuario, fotoPost: fotoPost}]
  setlistaPost(listaAtualizada)
  setnomeUsuario("")
  setfotoPost("")
  setfotoUsuario("")
}

const componentePost = listaPost.map((valor, index) => {
  return <li key={index}><Post nomeUsuario={valor.nomeUsuario} fotoUsuario={valor.fotoUsuario} fotoPost={valor.fotoPost}/></li>
})

return (
  <MainContainer>
      <EstiloForm>
      <input value={nomeUsuario} type="text" placeholder='Nome de Usuário' onChange={handlenomeUsuario}></input>
      <input value={fotoUsuario} type="text" placeholder='Link da foto Usuario' onChange={handlefotoUsuario}></input>
      <input value={fotoPost} type="text" placeholder='Link da foto do Post' onChange={handlefotoPost}></input>
      <button onClick={adicionarPost}>Criar Postagem!</button>
      </EstiloForm>
    <ul>{componentePost}</ul>
  </MainContainer>
)}

export default App;
