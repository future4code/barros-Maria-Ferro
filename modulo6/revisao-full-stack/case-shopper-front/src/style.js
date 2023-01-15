import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-height: 100vh;
    }`