import React from "react";
import styled from "styled-components";
import Logout from "../Routes/Logout"



const Header = styled.header`
    border-color:${props => props.theme.borderColor};
    background:${props => props.theme.backgroundColor};
    font-size:11px;
    height:30px;
    line-height:40px;
    z-index: 11;
`;

const Warp = styled.div`
    width: 1250px;
    margin: auto; 
    position: relative !important;
`;


const List = styled.ul`
    list-style: none;
    position: absolute;
    top: 0;
    right: 0;
`;

const ListItem = styled.li`
    display: inline-block;
    padding: 9px 5px 9px;   
    line-height: 1;
    text-align: -webkit-match-parent;
`;

const Link = styled.a`

`;



export default () => (
    

    <Header>
        <Warp>
            <List>
                <ListItem><Logout /></ListItem>
                <ListItem><Link href="/#join">JOIN</Link></ListItem>
                <ListItem><Link href="#">CART</Link></ListItem>
                <ListItem><Link href="#">ORDER</Link></ListItem>
                <ListItem><Link href="#">MYPAGE</Link></ListItem>
                <ListItem><Link href="#">CSCENTER</Link></ListItem>
            </List>
        </Warp>
    </Header>
);
