import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfil from './img/foto-perfil.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Maria" 
          descricao="Oi, eu sou a Maria! Eu tenho 28 anos, sou de Florianópolis/SC e sou estudante de Programação Web na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
          imagem ="https://cdn-icons.flaticon.com/png/512/3178/premium/3178283.png?token=exp=1655987273~hmac=d94251cc0c4ddb4151c82a3b88c200eb"
          categoria = "E-mail:"
          info= "maria@mariaferro.com"/>

      <CardPequeno 
          imagem ="https://cdn-icons.flaticon.com/png/512/1433/premium/1433265.png?token=exp=1655987012~hmac=caed6217b62a90e73f4d4e5904b42bbb"
          categoria = "Endereço:"
          info= "Rua Florida, nº. 7"/>
      </div>
 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/609/609803.png" 
          nome="Imobiliária X" 
          descricao="Atualmente eu trabalho como analista documental em processos de compra e venda de imóveis, em uma imobiliária aqui da minha cidade." 
        />

        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/9/99/IFSC_logo_vertical.png" 
          nome="IFSC" 
          descricao="Eu já fui estagiária no setor administrativo do Departamento Pessoal do IFSC." 
        />
        
        <CardGrande 
          imagem="http://identidade.paginas.ufsc.br/files/2010/09/brasao_UFSC_vertical_sigla1.jpg" 
          nome="UFSC" 
          descricao="E também já fui estagiária no setor administrativo da Secretaria de Relações Internacionais da UFSC!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
