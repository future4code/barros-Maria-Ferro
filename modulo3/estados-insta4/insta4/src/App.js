import React from 'react';
import Post from './components/Post/Post';
import './style.js'
import { MainContainer } from './style.js';


function App() {

const listaPost = [
  {nomeUsuario: 'paulinha',
  fotoUsuario: 'https://picsum.photos/50/50',
  fotoPost: 'https://picsum.photos/200/150'},

  {nomeUsuario: 'maria',
  fotoUsuario: 'https://picsum.photos/id/1013/50/50',
  fotoPost: 'https://picsum.photos/id/237/200/150'},

  {nomeUsuario: 'matheus',
  fotoUsuario: 'https://picsum.photos/id/777/50/50',
  fotoPost: 'https://picsum.photos/id/12/200/150'},
]

const componentePost = listaPost.map((valor, index) => {
  return <li key={index}><Post nomeUsuario={valor.nomeUsuario} fotoUsuario={valor.fotoUsuario} fotoPost={valor.fotoPost}/></li>
})

console.log(listaPost)

return (
  <MainContainer>
    <ul>{componentePost}</ul>
  </MainContainer>
)}

export default App;
