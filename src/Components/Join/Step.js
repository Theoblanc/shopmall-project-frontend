import React from "react";
import styled from "styled-components";






const JoinStepWrap = styled.div``;

const JoinStep = styled.div`
margin: 30px auto;
zoom: 1;
&:after{
    clear: both;
    display: block;
    content: '';
}
`;

const StepUl = styled.ul`
    list-style: none;
    vertical-align: middle;

`;

const StepLi = styled.li`
    float: left;
    width: 24.5%;
    margin: 0 2px;
    border-bottom: 3px solid #c8c8c8
    padding: 15px 0;
    text-align: center;
    color: #999;
`;

const StepNum = styled.h3`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -1px;   

`;

const StepText = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin: -5px 0 0 10px;
    font-size: 16px;

`;

export default () => (
    <JoinStepWrap>
        <JoinStep>
            <StepUl>
                <StepLi>
                    <StepNum>
                        STEP 1
                        <StepText>
                            가입방법 선택

                    </StepText>

                    </StepNum>


                </StepLi>

                <StepLi>
                    <StepNum>
                        STEP 2
                        <StepText>
                            이용약관 동의
                    </StepText>
                    </StepNum>

                </StepLi>

                <StepLi>
                    <StepNum>
                        STEP 3
                        <StepText>
                            회원정보 입력
                    </StepText>
                    </StepNum>

                </StepLi>

                <StepLi>
                    <StepNum>
                        STEP 4
                        <StepText>
                            회원가입 완료
                    </StepText>
                    </StepNum>

                </StepLi>


            </StepUl>

        </JoinStep>


    </JoinStepWrap>

);