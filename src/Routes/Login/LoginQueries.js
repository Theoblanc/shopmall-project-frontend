import { gql } from "apollo-boost";

export const LOG_IN = gql`
    mutation confirmLogin(
        $userid: String!
        $password: String!) {
        confirmLogin(        
        userid: $userid
        password: $password
        )
    }
`;


export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;




