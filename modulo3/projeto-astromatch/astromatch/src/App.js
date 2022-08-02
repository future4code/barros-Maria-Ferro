import { BotaoLimpar, GlobalStyle, Página } from "./style";
import axios from "axios";
import SeletorPágina from "./Components/SeletorPágina/SeletorPágina";


function App() {

  const Clear = () => {
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-ferro-barros/clear", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      alert("Matches e perfis resetados com sucesso!")
      window.location.reload()
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  }

  return (
    <div>
    <GlobalStyle/>
    <Página>
      <SeletorPágina/>
      <BotaoLimpar onClick={Clear}>Limpar Swipes e Matches</BotaoLimpar>
    </Página>
    </div>
  );
}

export default App;
