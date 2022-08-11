import styled from "styled-components";

export const ManageTripContainer = styled.div`
    width: 40vw;
    display: flex;
    margin: 10px;
    background-color: var(--soft-white);
    border-radius: 10px;

        a {
            text-decoration: none;
            color: var(--dark-gray);

            :hover {
                color: var(--dark-gray);
                opacity: 85%;
                transition: all 0.5s;
            }

            :active {
                color: var(--dark-gray);
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
        grid-template-columns: 80% 20%;

        button {
            border: none;
            align-self: center;
            background-color: var(--soft-white);

            :hover {
                cursor: pointer;
                opacity: 85%;
                transition: all 0.5s;
            }

            img {
                background-color: var(--soft-white);
            }
        }
    }
    
    :hover {
        box-shadow: 1px 3px 5px #aaa;
        cursor: pointer;
    }
`