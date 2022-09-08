import styled from "styled-components";

export const AppForm = styled.form`
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px;
    
    @media(max-device-width : 800px) {
        width: 100%;
        justify-content: center;
        text-align: center;
        margin: 15px 0;
    }

    input, select {
        width: 100%;
        padding: 15px;
        color: var(--dark-gray);
        background-color: var(--yellow);
        border-radius: 10px;
        border: none;
        box-sizing:border-box;

        @media(max-device-width : 800px) {
        width: 90vw;
        justify-content: center;
        text-align: center;
    }
    }

    label {
        display: none;
    }

    button {
        align-self: center;
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

        @media(max-device-width : 800px) {
        width: 120px;
        font-size: 0.8rem;
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
    }

`

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 50%;
    display: flex;
    justify-content: center;
    align-items: center;`