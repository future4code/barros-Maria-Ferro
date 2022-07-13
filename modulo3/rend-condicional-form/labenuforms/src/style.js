import styled from "styled-components";

export const Body = styled.div`
    margin: 0;
    padding: 0;`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15vh;
    background-color: #eb4034;`

export const Title = styled.h1`
    margin: 0;
    padding: 10px;
    color: white;
`

export const Main = styled.main`
    margin: 15px 30vw;
    padding: 10px;
    display: flex;
    flex-direction: column;

`

export const FormTitle = styled.h2`
    color: #eb4034;
    text-align: center;
`

export const AlignButton = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    width: 36vw;
`

export const Button = styled.button`
    margin: 25px;
    padding: 15px;
    border-radius: 10px;
    width: 15vw;
    border: 2px solid #eb4034;
    background-color: white;
    align-self: center;
    color: #eb4034;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 1px 1px rgba(1, 1, 1, 0.2);

    :hover {
        cursor: pointer;
    }

    :active {
        transform: scale(0.98);
    }
`