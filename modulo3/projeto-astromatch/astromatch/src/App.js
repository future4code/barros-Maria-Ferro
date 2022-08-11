import { BotaoLimpar, GlobalStyle, Página } from "./style";
import axios from "axios";
import SeletorPágina from "./Components/SeletorPágina/SeletorPágina";


function App() {

  const Clear = () => {
    return axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maria-ferro-barros/clear")
    .then((response) => {
      window.alert("Matches e perfis resetados com sucesso!")
    })
    .catch((error) => {
      console.log(error.response.data)
    })
  }

  return (
    <div>
    <GlobalStyle/>
    <Página>
      <SeletorPágina Clear={Clear}/>
      <BotaoLimpar onClick={Clear}>Limpar Swipes e Matches</BotaoLimpar>
    </Página>
    </div>
  );
}

export default App;
