import React from "react";
import styled from "styled-components";
import { SearchIcon, Cart } from "../Images/Icons";


const Nav = styled.div`
    height: auto;
    margin-bottom: 0;
    display: block;

`;

const Warp = styled.div`
    width: 1250px;
    margin: auto; 
    position: relative !important;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    display: inline-block;
    margin: 0 0 10px 120px;

`;

const ListItem = styled.li`
    display: inline-block;

`;

const Logo = styled.h1`
    font-size: 30px;
    font-weight: normal;
    padding: 60px 0;
    text-align: left;
    display: inline-block;
`;

const Link = styled.a`
    font-size: 14px;
    margin: 0 23px;
    font-weight: 700;
`;

const IconList = styled.ul`
    list-style: none;
    position: absolute;
    top: 70px;
    right: 0;
    display: inline-block;

`;

const IconsItem = styled.li`
    display: inline-block;

`;

const IconsLink = styled.a`
    font-size: 14px;

    margin: 10px;
    padding: 0;
`;


export default () => (
    <Nav >
        <Warp>
            <IconsLink href="#"><Logo><img src={ require('../Images/logo.jpg') } alt="회사명"/></Logo></IconsLink>
            <List>
                <ListItem><Link href="/#item">STORIES</Link></ListItem>
                <ListItem><Link href="#">PROJECTS</Link></ListItem>
                <ListItem><Link href="#">COLLECTION</Link></ListItem>
                <ListItem><Link href="#">BLOG</Link></ListItem>
                <ListItem><Link href="#">ABOUT US</Link></ListItem>
                <ListItem><Link href="#">CSCENTER</Link></ListItem>
            </List>
            <IconList>
            <IconsItem><IconsLink href="#"><SearchIcon /></IconsLink></IconsItem>
            <IconsItem><IconsLink href="#"><Cart /></IconsLink></IconsItem>
            </IconList>

        </Warp>

    </Nav>

);
