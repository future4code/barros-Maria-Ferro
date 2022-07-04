import styled from 'styled-components';

export const Body = styled.body`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
`

export const Cabeçalho = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 11%;
`

export const Principal = styled.main`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    height: 85%;
`

export const Sidebar = styled.div`
    background-color: orange;
    height: 100%;
`

export const SeçãoMensagens = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background-color: white;
    margin: 20px;
`

export const Rodape = styled.footer`
    display: flex;
    background-color: gray;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4%;
`

export const Imagem = styled.img`
    width: 65px;
`