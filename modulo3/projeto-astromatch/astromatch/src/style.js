import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }`

export const Página = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #fff, #aaa);
    gap: 25px;
`

export const BotaoLimpar = styled.button`
    color: white;
    border-radius: 10px;
    background-color: #ff8533;
    padding: 8px;
    border: none;

    :hover {
        cursor: pointer;
    }

    :active {
        transform: scale(0.98);
    }
` 
