import { Body, Header, Title, Main, FormTitle, Button, AlignButton } from "./style";
import { useState } from "react";
import Etapa1 from "./Components/Etapa1/Etapa1";
import Etapa2 from "./Components/Etapa2/Etapa2";
import Etapa3 from "./Components/Etapa3/Etapa3";
import Final from "./Components/Final/Final"

function App() {

    const [stage, setStage] = useState(1)

    const finalForm = (e) => {
      e.preventDefault()
      setStage(4)
    }

    const backForm = (e) => {
      e.preventDefault()
      setStage(1)
    }

    let componentButtonNext
    (stage === 2 || stage === 3) ? componentButtonNext = <Button onClick={finalForm}>Finalizar</Button> : componentButtonNext = null

    let componentButtonBack
    (stage === 2 || stage === 3) ? componentButtonBack = <Button onClick={backForm}>Anterior</Button> : componentButtonBack = null

    function FormsSelector() {

      if (stage===1) {
          return <Etapa1 nextStage={setStage}/>
      } else if (stage===2) {
          return <Etapa2/>
      } else if (stage===3) {
          return <Etapa3/>
      } else if (stage===4) {
        return <Final/>
      }
    }

  return (
    <Body>
      <Header><Title>LabenuForms</Title></Header>
      <Main>
        <FormTitle>
          Cadastro - Processo Seletivo
        </FormTitle>
        <FormsSelector/>
        <AlignButton>
      {componentButtonBack}
      {componentButtonNext}
        </AlignButton>
      </Main>
    </Body>
  );
}

export default App;
