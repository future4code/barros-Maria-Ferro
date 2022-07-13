import styled from "styled-components";

export const FormsSection = styled.form`
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 1.2em;
    color: #eb4034;
    text-align: justify;
`

export const InputLabels = styled.label`
    font-weight: bold;
    color: #eb4034;
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    select {
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #eb4034;
    width: 36vw;

    }`

export const InputForms = styled.input`
    padding: 5px;
    border-radius: 10px;
    border: 2px solid #eb4034;
    width: 35vw;
`