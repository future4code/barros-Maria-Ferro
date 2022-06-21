import fotoPerfil from './foto-perfil.jpg';
import './App.css';

function App() {

  const boasVindas = "Seja bem vindo ao site da Maria!";
  const mensagem = "Este é meu primeiro site com React."
  const onClickBotao = () => {
    alert('Boa noite a todos!')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2> {boasVindas} </h2>
        <img src={fotoPerfil} className="Foto-perfil" alt="Foto de Maria" />
        <p> {mensagem} </p>
        <button onClick={onClickBotao} className="Botao"> Clique aqui! </button>
      </header>
    </div>
  );
}

export default App;
