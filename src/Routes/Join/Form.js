import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";

const LayoutFull = styled.div`
    width: 1250px;
    margin: auto;
`;

const Layout = styled.div`
    float: left;
    width: 100%;
    background-color:${props => props.theme.backgroundColor}  
`;


const StepName = styled.h4`
margin-bottom: 10px;
font-size: 16px;
font-weight: 600;
`;

const FormWrap = styled.div`
margin: 10px auto 15px;

`;

const Table = styled.table`
width: 100%;
border-collapse: separate;
border-top: 1px solid #666;
border-bottom: 1px solid #aaa;
border-right: 0;
width: 100%;
border-collapse: separate;
border-top: 1px solid #666;
border-bottom: 1px solid #aaa;
border-right: 0;
tbody {
    display: table-row-group;
    vertical-align: middle;
}

tr {
    display: table-row;
    vertical-align: middle;
}
th {
    background: #f9f9f9;
    border-top: 1px solid #ddd;
    padding-left: 30px;
    padding: 13px 15px;
    text-align: left;
    vertical-align: top;
    font-weight: 600;
    color: #666;
    font-size: 12px;
}
td {
    font-size: 12px;
    border-top: 1px solid #ddd;
    background: #fff;
    border-left: 1px solid #eee;
    padding: 10px 15px;
    text-align: left;
    

    span {
        font-size: 11px;
        color: #848484;
    }
    select {
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 0;
        height: 22px;
        line-height: 22px;
        padding: 0 20px 0 3px;
        vertical-align: middle;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font: 400 12px Arial;
        overflow: visible !important;


    }
    div {
        padding-top: 10px !important;
        font-size: 11px;
        color: #848484;
        padding-bottom: 5px !important;

    }
    label {
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
        margin-right: 10px;
        
        font-size: 12px;
        color: #000;
    }
}
`;

const BtnWrap = styled.div`
margin-top: 30px;
text-align: center;

`;


const SubmitBtn = styled.input`
	padding: 12px 10px;
    min-width: 150px;
	font-size: 14px;
	color: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(51, 51, 51);
    border-image: initial;
    background: rgb(51, 51, 51);
`

const CancelBtn = styled.a`
    padding: 9.4px 60.3px;
    color: #ffffff;
    min-height: 40px;
	min-width: 150px;
	font-size: 14px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(170, 170, 170);
	border-image: initial;
    background: rgb(170, 170, 170);
    &:hover {
        text-decoration: none;
        color: #ffffff;
    }


`

const Link = styled.a`

`



const Submit = ({ type }) => <SubmitBtn type={ type } />

export default ({
    action,
    userName,
    userID,
    password,
    rePassword,
    nickname,
    birthday,
    gender,
    email0,
    email1,
    findEmail,
    mailing,
    phone1,
    phone2,
    phone3,
    cellphone1,
    cellphone2,
    cellphone3,
    sms,
    new_zipcode,
    address_type,
    address,
    onSubmit
}) => (
        <LayoutFull>  
            <Layout>
            <form action={action} onSubmit={onSubmit}>
            <StepName>회원정보 입력</StepName>
            <FormWrap>
                <Table>
                    <colgroup>
                        <col width="20%" /><col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row" >이름</th>
                            <td><Input type="text" size="20" name="user_name" {...userName} required  /></td>
                        </tr>
                        <tr>
                            <th scope="row" >아이디</th>
                            <td>
                                <Input type="text" size="20" name="userid" {...userID} required/> <span>공백 없는 영문, 숫자 포함 6-20자</span>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" >비밀번호</th>
                            <td><Input type="password" size="20" name="password" {...password} required/> <span>공백 없는 영문, 숫자 포함 6-20자 </span></td>
                        </tr>
                        <tr>
                            <th scope="row" >비밀번호 확인</th>
                            <td><Input type="password" size="20" name="re_password" {...rePassword} required/> <span>비밀번호 확인을 위해 한번 더 입력하세요.</span></td>
                        </tr>
                        <tr>
                            <th scope="row" >닉네임</th>
                            <td><Input type="text" maxlength="10" size="20" name="nickname" {...nickname} required /></td>
                        </tr>
                        <tr>
                            <th scope="row">생년월일</th>
                            <td><Input type="text" name="birthday" maxlength="10" size="20"  {...birthday} required /></td>
                        </tr>

                        <tr>
                            <th scope="row" >성별</th>
                            <td>
                                <label><Input type="radio" name="gender" value="male" {...gender} /> 남자</label>
                                <label><Input type="radio" name="gender" value="female" {...gender} /> 여자</label>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" >이메일</th>
                            <td><Input type="text" name="email[0]" size="20" {...email0} required/> @ <Input type="text" name="email[1]" size="20" {...email1} required/>
                                &nbsp;
			                    <select name="find_email" {...findEmail} >
                                    <option value="">직접선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="dreamwiz.com">dreamwiz.com</option>
                                    <option value="yahoo.co.kr">yahoo.co.kr</option>
                                    <option value="empal.com">empal.com</option>
                                    <option value="unitel.co.kr">unitel.co.kr</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="korea.com">korea.com</option>
                                    <option value="chol.com">chol.com</option>
                                    <option value="paran.com">paran.com</option>
                                    <option value="freechal.com">freechal.com</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                </select> &nbsp;<label><Input type="checkbox" name="mailing" {...mailing} value="Y" /> 정보메일을 수신하겠습니다.</label>
                                <div>이메일 수신에 동의하시면 여러가지 할인혜택과 각종 이벤트 정보를 받아보실 수 있습니다.<br />회원가입관련, 주문배송관련 등의 메일은 수신동의와 상관없이 모든 회원에게 발송됩니다.</div></td>
                        </tr>

                        <tr>
                            <th scope="row">전화번호</th>
                            <td><Input type="text" name="phone[]" size="6" maxlength="4" {...phone1} required/> - <Input type="text" name="phone[]" size="6" maxlength="4" {...phone2} required/> - <Input type="text" name="phone[]" size="6" maxlength="4" {...phone3} required /></td>
                        </tr>
                        <tr>
                            <th scope="row">휴대폰번호</th>
                            <td>
                                <Input type="text" name="cellphone[]" size="6" maxlength="4" {...cellphone1} required/> - <Input type="text" name="cellphone[]" size="6" maxlength="4" {...cellphone2} required/> - <Input type="text" name="cellphone[]" size="6" maxlength="4" {...cellphone3} required/>
                                &nbsp;<label><Input type="checkbox" name="sms" {...sms} value="Y" /> SMS를 수신하겠습니다.</label>
                                <div>SMS 수신에 동의하시면 여러가지 할인혜택과 각종 이벤트 정보를 받아보실 수 있습니다.<br />회원가입관련, 주문배송관련 등의 SMS는 수신동의와 상관없이 구매 회원에게 발송됩니다.</div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">주소</th>
                            <td>
                                <div>
                                    <Input type="text" name="new_zipcode" size="15"  {...new_zipcode} required/> <Link href="#">주소찾기</Link>
                                </div>
                                    <Input type="text" name="address" {...address} size="35" readonly required/> <Input type="text" name="address_type" size="40" {...address_type} required/>
                            </td>
                        </tr>


                    </tbody>

                </Table>
				<BtnWrap>
					<Submit type="submit" value="회원가입"></Submit>
                    &nbsp;&nbsp;

					<CancelBtn as = "a" href="#">취소</CancelBtn>


				</BtnWrap>

            </FormWrap>

        </form>
            </Layout>

        </LayoutFull>
    )