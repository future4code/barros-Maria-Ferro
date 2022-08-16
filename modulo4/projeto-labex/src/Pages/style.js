import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
    --dark-blue: #2A3D66;
    --soft-blue: #C3DBF2;
    --yellow: #F5C560;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Serif Display', serif;
    }`

export const Pages = styled.div`
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: (--yellow);
`

export const Title = styled.h1`
    color: var(--dark-blue);
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Button = styled.button`
    background-color: var(--dark-blue);
    color: var(--yellow);
    border-radius: 10px;
    width: 130px;
    padding: 15px;
    border: solid 1px var(--dark-blue);
    box-shadow: 1px 3px 5px #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;

    img {
        width: 16px;
    }

    :hover {
        cursor: pointer;
        border: 1px solid var(--dark-blue);
        background-color: var(--yellow);
        color: var(--dark-blue)
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