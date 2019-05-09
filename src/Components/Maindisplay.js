import React from "react";
import styled from "styled-components";
import { ArrowNext, ArrowPrev } from "../Images/Icons";


const MainDisplay = styled.div`
    width: 1350px;
    margin: 0 auto;

`;

const ItemText = styled.h3`
    margin: 90px 0 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color: #333333;
    letter-spacing: 0;
`;

const Warp = styled.div`


`;


const DisplayUl = styled.ul`
    width: 100%;
    margin-left: 0;
    position: relative;
    display: table;
    list-style: none;
    vertical-align: middle;
`;

const PrevBtnList = styled.li`
    display: table-cell;
    width: 0;
    text-align: left;
    vertical-align: middle;



`;
const NextBtnList = styled.li`
    display: table-cell;
    width: 0;
    text-align: right;
    vertical-align: middle;
`;


const DisplayList = styled.li`
    display: table-cell;
    width: 100%;
    vertical-align: middle;
`;





const ArrowButton = styled.a`
    float: left;
    cursor: pointer;
    text-align: left;
`;

const GoodList = styled.li`
    float: left;
    list-style: none;
    position: relative;
    width: 312px;
    padding-top: 1px;
    text-align: center;
    display: list-item;

`;


const GoodDisplayWrap = styled.div`
    position: relative !important;
    

`;

const ImageWrap = styled.div`
`;

const ImageDisplay = styled.div`
    width: 265px;
    margin-left: auto;
    margin-right: auto;`;

const GoodDisplayTextWrap = styled.ul`
    width: 265px;
    margin: 0 auto;
    padding: 15px 0;
`;

const GoodDisplayText = styled.li`
line-height: 1.8;
vertical-align: middle;
text-align: center;
display: list-item;
text-align: -webkit-match-parent;

`;

const GoodLink = styled.a`
    color: #565454;
    font-weight: normal;
    text-decoration: none;
    display: block;
    border-bottom: 0px solid #ddd;
    padding-bottom: 5px;

`;


const GoodName = styled.span`
color: #565454;
font-weight: normal;
text-decoration: none;
font-size: 12px;
&:hover {
    text-decoration: underline ;

}
`;

const GoodPrice = styled.span`
color: #000000;
font-size: 10pt;
font-weight: bold;
text-decoration: none;
font-family: 'Nanum Gothic', sans-serif;

`;


export default () => (
    <MainDisplay>
        <Warp>
            <ItemText>
                NEW PRODUCTS
            </ItemText>

            <DisplayUl>
                {/* prev아이콘 */}
                <PrevBtnList>
                    <ArrowButton>
                        <ArrowPrev />
                    </ArrowButton>
                </PrevBtnList>

                {/* 상품리스트 */}
                <DisplayList>
                    <GoodList>
                        {/* 상품이미지 */}
                        <GoodDisplayWrap>
                            <ImageWrap>
                                <ImageDisplay>
                                    <img src={require('../Images/Item/Item1.jpg')} alt="아이템1" width="265px" height="265px" />
                                </ImageDisplay>
                            </ImageWrap>

                            {/* 상품이름 정보 */}
                            <GoodDisplayTextWrap>
                                <GoodDisplayText>
                                    <GoodName>
                                        <GoodLink>
                                            식탁 전등
                                        </GoodLink>
                                    </GoodName>
                                </GoodDisplayText>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodPrice>
                                            &#92;63000
                                        </GoodPrice>
                                    </GoodLink>

                                </GoodDisplayText>
                            </GoodDisplayTextWrap>
                        </GoodDisplayWrap>
                    </GoodList>

                    <GoodList>
                        <GoodDisplayWrap>
                            {/* 상품이미지 */}

                            <ImageWrap>
                                <ImageDisplay>
                                    <img src={require('../Images/Item/Item2.jpg')} alt="아이템2" width="265px" height="265px" />

                                </ImageDisplay>

                            </ImageWrap>

                            {/* 상품이름 정보 */}
                            <GoodDisplayTextWrap>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodName>
                                            유기농 생우유
                                    </GoodName>
                                    </GoodLink>

                                </GoodDisplayText>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodPrice>

                                            &#92;7000원
    
                                    </GoodPrice>
                                    </GoodLink>

                                </GoodDisplayText>

                            </GoodDisplayTextWrap>

                        </GoodDisplayWrap>
                    </GoodList>

                    <GoodList>
                        <GoodDisplayWrap>
                            {/* 상품이미지 */}

                            <ImageWrap>
                                <ImageDisplay>
                                    <img src={require('../Images/Item/Item3.jpg')} alt="아이템3" width="265px" height="265px" />

                                </ImageDisplay>

                            </ImageWrap>
                            {/* 상품이름 정보 */}
                            <GoodDisplayTextWrap>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodName>
                                            맛있는 달걀
                                    </GoodName>
                                    </GoodLink>

                                </GoodDisplayText>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodPrice>
                                            &#92;11000원
                                    </GoodPrice>
                                    </GoodLink>

                                </GoodDisplayText>

                            </GoodDisplayTextWrap>

                        </GoodDisplayWrap>
                    </GoodList>

                    <GoodList>
                        <GoodDisplayWrap>
                            {/* 상품이미지 */}

                            <ImageWrap>
                                <ImageDisplay>
                                    <img src={require('../Images/Item/Item4.jpg')} alt="아이템4" width="265px" height="265px" />

                                </ImageDisplay>

                            </ImageWrap>

                            {/* 상품이름 정보 */}
                            <GoodDisplayTextWrap>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodName>
                                            회색 편한의자
                                    </GoodName>
                                    </GoodLink>

                                </GoodDisplayText>
                                <GoodDisplayText>
                                    <GoodLink>

                                        <GoodPrice>
                                            &#92;80000원
                                        </GoodPrice>
                                    </GoodLink>

                                </GoodDisplayText>

                            </GoodDisplayTextWrap>

                        </GoodDisplayWrap>
                    </GoodList>

                </DisplayList>

                {/* next아이콘 */}
                <NextBtnList>

                    <ArrowButton>
                        <ArrowNext />
                    </ArrowButton>

                </NextBtnList>
            </DisplayUl>






















        </Warp >

    </MainDisplay >
)






