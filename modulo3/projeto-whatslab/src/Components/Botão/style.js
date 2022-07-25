import styled from "styled-components";

export const BotãoEstilo = styled.button`
    width: 150px;
    border-radius: 5px;
    padding: 10px;
    background-color: white;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 165, 0, 1);
    }

    &:active {
        cursor: pointer;
        transform: scale(0.98);
    }
`