import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $name: String!
        $password: String!
        $nickname: String! 
        $birth: String!
        $gender: String!
        $email: String! 
        $homeNumber: Int!
        $cellPhone: Int!
        $zipCode: Int!
        $adress: String!
        $isAdmin: Boolean
    ) {
        name: $name
        password: $password
        nickname: $nickname 
        birth: $birth
        gender: $gender
        email: $email
        homeNumber: $homeNumber
        cellPhone: $cellPhone
        zipCode: $zipCode
        adress: $adress
        isAdmin: $isAdmin
    }
`


 