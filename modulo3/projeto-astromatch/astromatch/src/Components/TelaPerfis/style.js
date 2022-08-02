import styled from "styled-components";

export const TelaPrincipal = styled.div`
    height: 88%;
    width: 30%;
    background-color: #fff;
    box-shadow: 3px 3px 10px #aaa, 4px 4px 0 #000;
    border-radius: 5px;
`

export const TelaHeader = styled.div`
    display: grid;
    grid-template-columns: 88%  12%;
    padding: 1px;
    text-align: center;
    width: 99%;
    font-size: 1.5rem;
    border-bottom: 1px dotted #aaa;
    height: 7%;
    justify-items: center;
    align-items: center;
    font-weight: 600;

    p {
        margin: 0;
        margin-left: 17%;
    }

    p > span:nth-child(1) {
        color: #ff3333;
    }

    p > span:nth-child(2) {
        color: #ff8533;
    }

    button {
        border: none;
        background-color: white;
    }

    button:hover {
        cursor: pointer;
    }

    button img {
        width: 35px;
    }
`

export const TelaFoto = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 450px;
    margin: 5%;
    box-shadow: 1px 1px 10px #aaa;

    img {
        width: ${(props)=>props.tamanhoImagem};
        height: ${(props)=>props.tamanhoImagem};
    }

    transition-duration: 2s;
`

export const TelaInfo = styled.div`
    position: absolute;
    width: 90%;
    padding: 5%;
    height: 100%;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(170,170,170,0.5) 100%);
    display: ${(props)=>props.mostrarInfo};
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;

    h2, h4 {
        margin: 0;
    }

`

export const TelaBotoes = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0;
`

export const Botao = styled.button`
    padding: 5px;
    border-radius: 50%;
    border: 2px solid #008000;
    color: #008000;
    font-size: 3rem;
    box-shadow: 1px 1px 5px #aaa;
    width: 15%;
    text-align: center;

    :active {
        transform: scale(0.98);
        box-shadow: none;
    }

    :hover {
        transition-duration: 0.5s;
        cursor: pointer;
        color: white;
        background-color: #008000;
    }
`

export const BotaoDislike = styled(Botao)`
    color: #ff3333;
    border: 2px solid #ff3333;

    :hover {
        background-color: #ff3333;
    }
`