import { gql } from '@apollo/client';

export const GET_MATCH = gql`
    query GetMatch($id: ID!) {
        match(id: $id) {
            id
            date
            homeTeam
            awayTeam
            homeScore
            awayScore
        }
    }
`;

export const GET_MATCHES = gql`
    query GetMatches {
        matches {
            id
            date
            homeTeam
            awayTeam
            homeScore
            awayScore
        }
    }
`;





