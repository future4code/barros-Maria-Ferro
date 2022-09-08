import styled from "styled-components";

export const TripDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const TitleDetailsPage = styled.h1`
    color: var(--dark-blue);
    text-decoration: underline;
    padding: 15px;
    background-color: var(--yellow);
    border-radius: 15px;
`
export const CandidateContainer = styled.li`
    list-style: none;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
    padding: 10px;
    background-color: var(--soft-blue);
    border-radius: 10px;
    border: 1px solid var(--dark-blue);
    font-family: 'Merriweather', serif;

        p {
            font-size: 0.9rem;
            color: var(--dark-blue);
            margin: 5px;

            span {
                font-weight: 700;
            }
        }

    @media(max-device-width : 800px) {
    width: 95vw;
    justify-content: center;
    text-align: center;
    }
`

export const ApprovedCandidatesContainer = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const Loader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;`