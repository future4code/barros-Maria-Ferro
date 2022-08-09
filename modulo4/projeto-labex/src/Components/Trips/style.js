import styled from "styled-components";

export const AllTripsContainer = styled.div`
    margin-top: 10px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`

export const TripContainer = styled.div`
    width: 50vw;
    padding: 15px;
    display: flex;
    box-shadow: 3px 1px 5px #aaa;

    li {
        list-style: none;
        color: var(--dark-gray);

        span {
            color: var(--pink)
        }
    }

`