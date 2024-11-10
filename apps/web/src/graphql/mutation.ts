import { gql } from "@apollo/client";

export const SAVE_MATCHES = gql`
  mutation SaveMatches {
    saveMatches
  }
`;
