import React from "react";
import { useQuery } from "react-apollo-hooks";
import { ITEM_QUERY } from "./Item/ItemQueries";
import { Home } from "../Images/Icons";
import Display from "./Item/Display";
import styled from "styled-components";

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

const GoodListSummary = styled.div`
padding: 10px 0;
font-size: 13px;
`

const GoodListTop = styled.div`
margin-bottom: 30px;
border-top: 1px solid #e3e4e8;
border-bottom: 1px solid #999;
padding: 20px 0 10px 0;
zoom: 1;
`;

const FlaotWrap = styled.ul`
zoom: 1;
list-style: none;
vertical-align: middle;
`;

const FloatLeftList = styled.li`
width: 49%;
display: list-item;


`

const ListSpan = styled.span`
letter-spacing: -1px;
color: #cfcfcf;
line-height: 1.6;
`

const TopLink = styled.a`
color: #727272;
font-size: 12px;
font-family: 'Nanum Gothic', sans-serif;

&.active {
    color: #333;
    font-weight: 700;
}


`;

const DisplayContainer = styled.div`
padding-top: 0;
`;

const DisplayContextUl = styled.ul`

    margin-bottom: 30px;
    width: 100%;
`;



const DisplayItemWrap = styled.div`
`


export default () => {
  const { data, loading } = useQuery(ITEM_QUERY);
  return (
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
                LIVINGROOM
                    </TextList>
            </IconList>
          </Category>

          <H3Wrap>
            <Bar>
              &nbsp;
                </Bar>

            <Title>
              LIVINGROOM
                </Title>
            <SubTitle>
            </SubTitle>
          </H3Wrap>

          <GoodListSummary>
            전체상품 20개
                </GoodListSummary>
          <GoodListTop>
            <FlaotWrap>
              <FloatLeftList>
                <ListSpan>
                  <TopLink href="/#cart" className="active">인기순</TopLink>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                                <TopLink>최근등록순</TopLink>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                                <TopLink>판매인기순</TopLink>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                                <TopLink>낮은가격순</TopLink>
                  &nbsp;&nbsp;|&nbsp;&nbsp;
                                <TopLink>높은가격순</TopLink>
                </ListSpan>

              </FloatLeftList>


            </FlaotWrap>
          </GoodListTop>
          {/* Header */}

          <DisplayContainer>
            <DisplayContextUl>
                <DisplayItemWrap>
                  {loading && "LODING..."}
                  {!loading && data && data.seeItem &&
                    data.seeItem.map(item => (
                      <Display
                        key={item.id}
                        id={item.id}
                        item={item.item}
                        price={item.price}
                        finalPrice={item.finalPrice}
                        files={item.files}
                        currentItem= { item.id}
                      />
                    ))
                  }
                </DisplayItemWrap>

            </DisplayContextUl>

          </DisplayContainer>







        </Layout>

      </LayoutFull>



    </>
  );
}
