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



const LoginNameWrap = styled.div`
    clear: both;
    text-align: center;
    margin-top: 0;
    margin-bottom: 30px;
`

const LoginName = styled.h3`
    position: relative;
    padding-top: 20px;
    font-size: 17px;
    font-weight: 400;
    color: #000;
    letter-spacing: 0;
`;

const SubName = styled.p`
    margin-top: 10px;
    font-size: 12px;
    color: #888;
    line-height: 1.4;
`;

const LoginWrap = styled.div`
width: 370px;
margin: 0 auto;
text-align: center;
`

const LoginForm = styled.div`

`

const Input = styled.input`
width: calc(100% - 12px);
height: 40px;
line-height: 40px;
border: 1px solid #e0e0e0;
padding-left: 10px;
font-size: 14px;
margin-bottom: 10px;
`




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
                            로그인
                    </TextList>
                    </IconList>
                </Category>

                <LoginNameWrap>
                    <LoginName>로그인</LoginName>
                    <SubName>회원 로그인을 하시면 각종 혜택 및 정보를 제공 받으실 수 있습니다.</SubName>
                </LoginNameWrap>
                <LoginWrap>
                    <form>
                        <fieldset>
                            <div>
                                <Input type="text" name="userid" placeholder="아이디" />
                                <Input type="password" password="password" name="password" placeholder="비밀번호" />
                                <Input type="submit" value="로그인" />
                            </div>

                        </fieldset>
                    </form>
                </LoginWrap>

            </Layout>
        </LayoutFull>


    </>
);