# Projeto Labex - React

Projeto desenvolvido por Maria Fernandez de Moura Ferro como parte da fixação de conteúdo de ReactJS do curso de Web Full Stack da Labenu.

# Conteúdo

<ul>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#sobre"> Sobre </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#se%C3%A7%C3%B5es-e-funcionalidades"> Seções </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#link-do-surge"> Link do Surge </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#tecnologias-utilizadas"> Tecnologias Utilizadas </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#versão-mobile"> Versão Mobile </a> </li>
</ul>

# Sobre

Este projeto consiste em um site de viagens interplanetárias, utilizando de uma API fornecida pela Labenu, com uma parte pública e outra parte privada. O usuário pode visualizar as viagens disponíveis e se candidatar a uma delas, enquanto que o "administrador" pode fazer login, organizar as viagens, aceitar ou recusar candidaturas e criar novas viagens. Abaixo, estão listadas todas as páginas e funcionalidades do site, com imagens para ilustrar. 

# Seções e Funcionalidade

<ul>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#home-page"> Home Page </a> </li> 
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#seção-pública"> Seção Pública </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#seção-privada"> Seção Privada </a> </li>
</ul>

## Home Page

A página inicial do site é bem simples, possui o logo e nome do site, e dois botões que levam para a seção pública (Ver Viagens) ou para a seção privada (Área Admin).

![image](https://user-images.githubusercontent.com/102297204/186896406-977890c8-ef37-4b42-941f-c0dca46bcc5b.png)

## Seção Pública

Esta seção pode ser acessada por todos e permite visualizar as viagens disponíveis e se inscrever para uma viagem.

<ul>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex/#página-lista-de-viagens"> Página Lista de Viagens </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#página-formulário-de-inscrição"> Página Formulário de Inscrição </a> </li>
</ul>

### Página Lista de Viagens 

Nesta página, o usuário poderá visualizar uma lista de todas as viagens ofertadas, com nome, planeta de destino, descrição, tempo da viagem (em dias), e data de partida. Possui dois botões, um para voltar para a página inicial, e outro para inscrever-se para uma viagem. Caso clique neste último, ele será direcionado para a Página Formulário de Inscrição.

![image](https://user-images.githubusercontent.com/102297204/186896618-a3c88eff-0b08-452e-8ef2-5b953aae108b.png)

### Página Formulário de Inscrição

Esta página contém um formulário para preenchimento do usuário, com todos as informações obrigatórias. É necessário escolher a viagem, inserir um nome de no mínimo 3 letras; inserir uma idade maior ou igual a 18 anos; apresentar um texto de candidatura de, no mínimo, 50 caracteres; incluir uma profissão de, no mínimo, 10 caracteres; e escolher seu país de origem. Ao clicar em enviar, será rodada a requisição da API. Se estiver tudo certo, abrirá um alerta com esta informação. Se não, abrirá um alerta de erro.

![image](https://user-images.githubusercontent.com/102297204/186897161-948279f1-7398-46fa-a39b-0f4698b6cd48.png)

## Seção Privada

Esta seção possui uma página de login, a qual pode ser acessada por todos, e as seguintes páginas que só podem acessadas pelo usuário que possuir uma senha: painel administrativo, página de detalhes das viagens, e formulário para criar uma nova viagem.

<ul>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex/#página-login"> Página Login </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#página-painel-administrativo"> Página Painel Administrativo </a> </li>  
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#página-detalhes-da-viagem"> Página Detalhes da Viagem </a> </li>
  <li> <a href="https://github.com/future4code/barros-Maria-Ferro/tree/master/modulo4/projeto-labex#página-criar-viagem"> Página Criar Viagem </a> </li>
</ul>

### Página Login

Caso o usuário ainda não esteja logado, ao clicar em Área Admin na Home Page, ele é direcionado a esta página. Nela, é preciso incluir o e-mail e senha para poder seguir. Ao clicar no botão 'Login', é exibido um alerta de erro quando alguma informação não está correta. Se estiver tudo certo, o usuário é direcionado para a Página Painel Administrativo. Obs: Caso o usuário já esteja logado ao clicar em Área Admin na Home Page, ele é levado diretamente para a Página Painel Administrativo.

![image](https://user-images.githubusercontent.com/102297204/186898566-d0f7972f-9791-4dd3-b430-6d618b36a2e1.png)

### Página Painel Administrativo

Nesta página estão listadas todas as viagens existentes no momento. O usuário pode excluir uma viagem, clicando na imagem de lixeira ao lado da viagem a ser deletada. Este botão exibe um alerta para confirmar se o usuário deseja realmente excluir a viagem. Além disso, é possível clicar em cada uma das viagens para ser direcionada a sua Página de Detalhes correspondente. Por fim, os botões permitem voltar para a Home Page, Criar Viagem (direciona para a página de criar viagem), e fazer Logout.

![image](https://user-images.githubusercontent.com/102297204/186898756-19946dc7-53d3-4d2f-9386-808f3f4018c9.png)

### Página Detalhes da Viagem

Ao selecionar uma viagem na página anterior, o usuário é direcionada para a Página de Detalhes da viagem em questão. Esta página apresenta os detalhes da viagem (nome, descrição, duração e data de início), os candidatos pendentes para aprovação (com os detalhes inseridos no formulário de inscrição) e uma lista dos candidatos já aprovados. Ao clicar em Aprovar o candidato, o card é excluído e o nome, idade e país do candidato é inserido na lista de aprovados. Ao clicar em Recusar, o card é apenas excluído. A página possui um botão para voltar para a página anterior.

![image](https://user-images.githubusercontent.com/102297204/186899822-f49c9726-9214-416c-8421-acec6c7567ad.png)
![image](https://user-images.githubusercontent.com/102297204/186899833-a0e99945-f8bf-47f2-a24d-ff0a3721b0c4.png)

### Página Criar Viagem

Esta página pode ser acessada pela Página Painel Administrativo. Ela consiste de um formulário para criar uma viagem nova, com inputs para nome da viagem (minímo de 5 caracteres), planeta, data de início (precisa ser pelo menos a data do dia em que está sendo criada), descrição da viagem (mínimo de 30 caracteres) e duração (em dias, mínimo de 50 dias). Todas as informações são obrigatórias. Ao clicar em Criar, é exibido um alerta informando que a viagem foi criada com sucesso, caso tenha dado tudo certo, ou um alerta de erro, caso tenha dado algo errado na requisição.

![image](https://user-images.githubusercontent.com/102297204/186900464-2cfb5b79-06a9-4c88-b812-8e224099382d.png)

# Link do Surge

https://vigorous-girls.surge.sh/

# Tecnologias Utilizadas

<ul>
    <li> React </li>
    <li> HTML </li>
    <li> CSS </li>
    <li> JavaScript </li>
</ul>

# Versão Mobile

O site possui uma versão adaptada para Mobile, para melhor visualização em telas verticais e menores.

![image](https://user-images.githubusercontent.com/102297204/186901137-07be4eb8-0ac4-41e6-834f-5ca5fc1af1f6.png) ![image](https://user-images.githubusercontent.com/102297204/186901192-ee7ded71-464d-44ec-aa69-fa50efcea2fe.png)
![image](https://user-images.githubusercontent.com/102297204/186901242-ee345cea-2a6f-4d6a-bee0-fb8eba68008b.png) ![image](https://user-images.githubusercontent.com/102297204/186901305-07f0e885-37da-4440-93cd-43668e141fad.png) ![image](https://user-images.githubusercontent.com/102297204/186901364-947de857-763f-4e9c-a1e0-56ecf1f577c4.png) ![image](https://user-images.githubusercontent.com/102297204/186901413-f7b15f96-8a80-4aa8-b6ec-9aed94dd6e42.png)
![image](https://user-images.githubusercontent.com/102297204/186901464-f6beccfc-baf9-49e8-828e-c8413838e98a.png)





