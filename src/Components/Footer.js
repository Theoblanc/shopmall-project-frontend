import React from "react";
import styled from "styled-components";


const Footer = styled.div`
margin-top: 0;
clear: both;
z-index: 10;
`;

const Warp = styled.div`
border-top: 1px solid #333;
border-bottom: 1px solid #e0e0e0;

`;

const WrapNav = styled.div`
position: relative !important;
width: 1250px;
margin: auto;

`

const Navi = styled.ul`
height: 70px;
line-height: 70px;
text-align: left;
list-style: none;
vertical-align: middle;

`;

const List = styled.li`
background: none;
padding-left: 0;
padding: 0 10px 0 15px;
display: inline-block;

`;

const Link = styled.a`
font-size: 11px;

`;




export default () =>(
    <Footer>
        <Warp>
            <WrapNav>
            <Navi>
                <List>
                    <Link href="#">COMPANY</Link>
                </List>
                <List>
                    <Link href="#">AGREEMENT</Link>
                </List>
                <List>
                    <Link href="#">PRIVACY POLICY</Link>
                </List>
                <List>
                    <Link href="#">GUIDE</Link>
                </List>
                <List>
                    <Link href="#">PARTNERSHIP</Link>
                </List>
            </Navi>
            </WrapNav>

        </Warp>

    </Footer>    
)