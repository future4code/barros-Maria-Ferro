import styled from "styled-components";

export const TripDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;`

export const TitleDetailsPage = styled.h1`
    color: var(--dark-blue);
    text-decoration: underline;
    padding: 15px;
    background-color: var(--yellow);
    border-radius: 15px;
`
export const CandidateContainer = styled.div`
    width: 40vw;
    display: flex;
    margin: 10px;
    background-color: var(--soft-blue);
    border-radius: 10px;
    border: 1px solid var(--dark-blue);

    li {
        list-style: none;
        font-family: 'Merriweather', serif;
        padding: 10px;
        justify-content: flex-start;
        width: 100%;

        p {
            font-size: 0.9rem;
            color: var(--dark-blue);

            span {
                font-weight: 700;
            }
        }
    }
`