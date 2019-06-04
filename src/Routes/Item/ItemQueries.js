import { gql } from "apollo-boost";


export const ITEM_QUERY = gql`
{
    seeItem {
        id
        item
        price
        finalPrice
        files {
            id
            url
        }
 
        }
}
`








