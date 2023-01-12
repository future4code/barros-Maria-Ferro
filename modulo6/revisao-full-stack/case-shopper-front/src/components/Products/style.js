import styled from "styled-components";

export const ProductsStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2vh;
    margin-top: 2%;

    h2 {
        margin: 0;
    }
    `
export const DivStyle = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF0D7;
    border-radius: 15px;
    padding: 5px 25px;
    gap: 15%;

    p {
        font-weight: bold;
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