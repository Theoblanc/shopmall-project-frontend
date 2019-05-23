import React from "react";
import styled from "styled-components";
import { Home } from "../../Images/Icons";
import LoginInput from "../../Components/LoginInput";




const LayoutFull = styled.div`
        width: 1250px;
        margin: auto;
        min-height: 500px;

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
    
const LoginList = styled.ul`
    display: block;
    vertical-align: middle;
    zoom: 1;
    list-style: none;

    li {
        display: list-item;
        text-align: center;
        list-style: none;
        font-size: 12px;
        float: right;
        padding-left: 8px;


        &:first-child {
            float: left;
        }

        input {
            width: 15px;
            height: 15px;
            vertical-align: middle !important;
            margin-left: 0;
            margin-right: 0;
            font-size: 12px;
            color: #000;
            text-rendering: auto;
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;


        }

        &::after {
            clear: both;
            display: block;
            content: '';
        }

    }

    `;


  

    




export default ({onSubmit, userID, password, action}) => (
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
                    <form action={action} onSubmit={onSubmit}>
                        <fieldset>
                            <div>
                                <LoginInput type="text" name="userid" placeholder="아이디" {...userID} />
                                <LoginInput type="password" name="password" placeholder="비밀번호" {...password} />
                                <LoginInput type="submit" value="로그인" />

                            </div>

                        </fieldset>

                    </form>
                    <LoginList>
                        <li><LoginInput type="checkbox" name="idsave" value="checked" /> <label>아이디 저장</label></li>
                        <li><a href="/member/agreement">회원가입</a>&nbsp; | &nbsp;<a href="/member/find">아이디/비밀번호 찾기</a></li>
                    </LoginList>
                </LoginWrap>



            </Layout>
        </LayoutFull>


    </>
);