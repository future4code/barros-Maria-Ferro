import styled from "styled-components";

export const ManageTripContainer = styled.div`
    width: 40vw;
    display: flex;
    margin: 10px;
    background-color: var(--soft-blue);
    border-radius: 10px;
    border: 1px solid var(--dark-blue);

    @media(max-device-width : 800px) {
        width: 100%;
    }

    a {
        text-decoration: none;
        color: var(--dark-blue);

        :hover {
            opacity: 85%;
            transition: all 0.5s;
        }

        :active {
            color: var(--dark-blue);
        }
    }

    li {
        display: grid;
        font-family:'Merriweather', serif;
        text-transform: uppercase;
        font-weight: 700;
        padding: 35px;
        align-items: center;
        width: 35vw;
        grid-template-columns: 85% 15%;

        @media(max-device-width : 800px) {
        width: 100%;
        justify-content: center;
        text-align: center;
    }

        button {
            border: none;
            align-self: center;
            background-color: var(--soft-blue);

            :hover {
                cursor: pointer;
                opacity: 85%;
                transition: all 0.5s;
            }

            img {
                background-color: var(--soft-blue);
            }
        }
    }
    
    :hover {
        box-shadow: 1px 3px 5px #aaa;
        cursor: pointer;
        background-color: var(--yellow);

        img {background-color: var(--yellow);}
        button {background-color: var(--yellow);}

    }
`