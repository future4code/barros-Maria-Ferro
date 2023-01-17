import styled from "styled-components";

export const MyProduct = styled.li `
    background-color: #FFF0D7;
    border-radius: 15px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
    padding: 5px;

    input {
        width: 3vw;
    }

    p {
        font-weight: bold;
    }

    :hover {
        background-color: #EAAACB;
    }

    button {
        display: flex;
        background-color: #FFF0D7;
        padding: 3px;
        width: 5vw;
        border: none;
        min-width: fit-content;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 10px;

        :hover {
            cursor: pointer;
            background-color: #D9CCB7;
            border: 1px solid black;
        }

        :active {
            transform: scale(0.98)
        }
    }
`