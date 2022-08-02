import styled from "styled-components";

export const TelaPrincipal = styled.div`
    height: 88%;
    width: 30%;
    background-color: #fff;
    box-shadow: 3px 3px 10px #aaa, 4px 4px 0 #000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`

export const TelaHeader = styled.div`
    display: grid;
    grid-template-columns: 88%  12%;
    padding: 1px;
    text-align: center;
    width: 99%;
    font-size: 1.5rem;
    border-bottom: 1px dotted #aaa;
    height: 7%;
    justify-items: center;
    align-items: center;
    font-weight: 600;

    p {
        margin: 0;
        margin-left: 17%;
    }

    p > span:nth-child(1) {
        color: #ff3333;
    }

    p > span:nth-child(2) {
        color: #ff8533;
    }

    button {
        border: none;
        background-color: white;
    }

    button:hover {
        cursor: pointer;
    }

    button img {
        width: 35px;
    }
`

export const ListaMatches = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 10px;
    margin-left: -5%;
    width: 93%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    font-size: 0.9rem;

    
    li {
        margin: 0;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        padding: 5px 2px;
        border-bottom: 1px solid #ff8533;
        gap: 5px;
    }

    li:hover {
        background-color: #eeeeee;
    }
`

export const AvatarContainer = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    justify-self: center;
`

export const Avatar = styled.img`
   overflow: hidden;
   object-fit: fill;
   display: block;
   margin: 0 auto;
   width: 50px;
   border-radius: 50%;
`

export const PerfilInfo = styled.div` 
    display: flex;
    flex-direction: column;

    p {
        margin: 0;
    }
    
    p:nth-child(1) {
        font-weight: bold;
    }  
`