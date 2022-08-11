import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
    --pink: #D45EAB;
    --soft-pink: #FFE6F6;
    --soft-white: #FBFAF5;
    --dark-gray: #444444;
    --soft-gray: #C3C0C0;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Serif Display', serif;
    }`

export const Pages = styled.div`
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: (--soft-white);
`

export const Title = styled.h1`
    color: var(--pink);
    font-size: 2rem;
`

export const Button = styled.button`
    background-color: var(--pink);
    color: var(--soft-white);
    border-radius: 10px;
    width: 120px;
    padding: 15px;
    border: solid 1px var(--pink);
    box-shadow: 1px 3px 5px #aaa;

    :hover {
        cursor: pointer;
        border: 1px solid var(--pink);
        background-color: var(--soft-white);
        color: var(--pink)
    }

    :active {
        transform:scale(0.98)
    }
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 25px;
    `