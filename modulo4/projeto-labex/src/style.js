import { createGlobalStyle } from "styled-components";

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