import styled from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 3vh;
    margin-top: 2%;

    div {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 3px solid #FF7D95;
        border-radius: 15px;
        padding: 15px 25px;
    }

    label {
        text-transform: uppercase;
        font-weight: bold;
        color: #FF7D95;
    }

    input {
        width: 50vw;
    }

    #qty {
        width: 3vw;
    }

    button {
        display: flex;
        background-color: #FF7D95;
        padding: 3px;
        width: 5vw;
        border: none;
        min-width: fit-content;
        justify-content: center;
        align-items: center;
        border: 1px solid #FF7D95;
        border-radius: 10px;

        :hover {
            cursor: pointer;
            background-color: white;
            border: 1px solid #FF7D95;
        }

        :active {
            transform: scale(0.98)
        }
    }

    #end-order {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2vh;

            input {
                width: 10vw;
            }

            button {
                width: 10.5vw;
            }
        }
    `