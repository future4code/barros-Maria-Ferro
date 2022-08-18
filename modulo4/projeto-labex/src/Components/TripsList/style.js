import styled from "styled-components";

export const AllTripsContainer = styled.div`
    margin-top: 20px;
    background-color: var(--soft-blue);
    border-radius: 10px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
        }
`

export const TripContainer = styled.li`
    width: 40vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    background-color: var(--soft-blue);
    border-radius: 10px;
    border: 1px solid var(--dark-blue);
    list-style: none;
    color: var(--dark-blue);
    font-family: 'Merriweather', serif;
    text-transform: uppercase;
    text-align: center;
    padding: 25px;
    box-sizing:border-box;

        p:nth-child(1) {
            font-weight: 900;
        }

        p:nth-child(2) {
            font-size: 0.8rem;
        }

        p:nth-child(3) {
            font-weight: 700;
        }

        p:nth-child(4) {
            font-size: 0.8rem;
            font-weight: 900;
        }

    :hover {
        background-color: var(--yellow);
        border: 1px solid var(--soft-blue);
    }

`