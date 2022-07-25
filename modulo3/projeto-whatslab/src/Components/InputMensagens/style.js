import styled from "styled-components";

export const Formulário = styled.div`
    display: flex;
    gap: 5px;
`

export const Inputs = styled.input`
    width: ${(props)=>props.largura};
    padding: 10px;
    border-radius: 5px;
`