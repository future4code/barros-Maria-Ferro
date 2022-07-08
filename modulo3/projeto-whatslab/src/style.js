import styled from 'styled-components';

export const Body = styled.div`
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

export const Imagem = styled.img`
    width: 65px;
`

export const Principal = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 85%;
`

export const Sidebar = styled.div`
    background-color: orange;
    height: 100%;
`

export const Rodape = styled.footer`
    display: flex;
    background-color: gray;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4%;
`

export const SeçãoMensagens = styled.div`
    display: grid;
    grid-template-rows: 90% 10%;
    overflow-y: auto;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

`

export const LinhaMensagem = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props)=>props.lado};
    align-items: flex-end;
    margin: 5px;
    margin-right: 50px;

    p {
        margin: 0;
    }
    
    p:nth-child(1) {
        display: ${(props)=> props.displayR};
        font-weight: bold;
    }
`

export const Mensagem = styled.div `
    padding: 10px;
    background-color: ${(props)=>props.corFundo};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    text-align: left;
    box-shadow: 2px 2px rgba(1, 1, 1, 0.2);
`

export const SeçãoInputs = styled.form`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background-color: white;
    margin: 10px;
    grid-row-start: 2;
`