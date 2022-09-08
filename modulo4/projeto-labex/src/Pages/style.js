import styled from "styled-components";

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
    margin: 0;
    margin-bottom: 10px;

    @media(max-device-width : 800px) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }
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

    @media(max-device-width : 800px) {
        width: 120px;
        font-size: 0.8rem;
    }

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
    margin-bottom: 5px;

    @media(max-device-width : 800px) {
        width: 100vw;
    }

    `