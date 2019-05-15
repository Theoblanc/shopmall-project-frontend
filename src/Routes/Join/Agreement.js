import React from "react";
import styled from "styled-components";
import { Home } from "../../Images/Icons";



const LayoutFull = styled.div`
    width: 1250px;
    margin: auto;
`;

const Layout = styled.div`
    float: left;
    width: 100%;
    background-color:${props => props.theme.backgroundColor}  
`;

const Category = styled.div`
    float: right;
    margin-bottom: 20px;
    line-height: 1.4;
    font-size: 12px;
    

`;

const IconList = styled.ul`
    float: left;
    list-style: none;
    vertical-align: middle;

`;

const IconListItem = styled.li`
    position: relative;
    float: left;
    padding-right: 5px;
    color: #999;
    vertical-align: middle;



`;

const TextList = styled.li`
padding-left: 10px;
position: relative;
float: left;
margin-top: 2px;
padding-right: 5px;
color: #999;

`;

const IconLink = styled.a`

`;

const H3Wrap = styled.div`
clear: both;
text-align: center;
margin-top: 0;
margin-bottom: 30px;
`;

const Title = styled.h3`
position: relative;
padding-top: 20px;
font-size: 17px;
font-weight: 400;
color: #000;
letter-spacing: 0;`;

const SubTitle = styled.p`
margin-top: 10px;
font-size: 12px;
color: #888;
line-height: 1.4;
`;

const Bar = styled.div`    
display: block;
position: absolute;
top: 0;
left: 50%;
margin-left: -15px;
width: 30px;
height: 1px;
background: #000;`;



export default () => (
    <>
    <LayoutFull>
        <Layout>
            <Category>
                <IconList>
                    <IconListItem>
                        <IconLink>
                            <Home />
                        </IconLink>
                    </IconListItem>
                    <TextList>
                       회원가입
                    </TextList>
                </IconList>
            </Category>

            <H3Wrap>
                <Bar>
                    &nbsp;
                </Bar>
                
                <Title>
                    회원가입
                </Title>
                <SubTitle>
                    회원이 되셔서 회원등급할인/할인쿠폰/마일리지 등 다양한 서비스를 받으세요.
                </SubTitle>
            </H3Wrap>



        </Layout>
    </LayoutFull>


    </>
)

