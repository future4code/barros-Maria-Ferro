import styled from "styled-components";

export const AppForm = styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px;

    input, select {
        width: 100%;
        padding: 15px;
        color: var(--dark-gray);
        background-color: var(--soft-white);
        border-radius: 10px;
        border: none;
    }

    select {
        width: 104%;
    }
`