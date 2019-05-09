import React from "react";
import styled from "styled-components";


const CategorySub = styled.div`
        display: none;
        height: 0;
        background: rgba(255,255,255,0.9);
        height: 150px;
        border-bottom: 1px solid #ddd;
        transition: height 5s linear;
        opacity: 0.6 

        `;

const Container = styled.div`
    position: relative 
    &:hover {
        ${CategorySub} {
            display: block;
            height: max;

        }
}
`;



const Toobar = styled.div`
        margin-bottom: 20px;
        border-top: 1px solid #e9e9e9;
        border-bottom: 1px solid #e9e9e9;
        min-height: 50px;
        z-index: 10;


    `;

const Warp = styled.div`
        width: 1250px;
        margin: auto; 
    `;
const CategoryWarp = styled.div`
    width: 1250px;
    margin: auto; 
`;

const List = styled.ul`
        display: table;
        width: 100%;
        vertical-align: middle;
        text-align: center;

    `;

const ListItem = styled.li`
        display: inline-block;
        width:12.345679012346%;
 
 
          

    `;

const Link = styled.a`
    line-height: 50px;
    font-size: 12px;

    `;

const WarpUl = styled.div`
        display: table;
        width: 100%;
        vertical-align: middle;
        text-align: center;

        `;

const CategorySub2 = styled.ul`
        width:12.345679012346%
        top: 0;
        display: inline-block;

    `
const Good = styled.li`
        background: none;
        padding-left: 0;
        text-align: center;
        line-height: 2.0;

    `;

const GoodLink = styled.a`
    font-size: 12px;
    &:hover {
        text-decoration: underline ;

    }
    `;

export default () => (
    <Container>
        <Toobar>
            <Warp>
                <List>
                    <ListItem><Link href="#">BEDROOM</Link></ListItem>
                    <ListItem><Link href="#">LIVINGLOOM</Link></ListItem>
                    <ListItem><Link href="#">KITCHEN</Link></ListItem>
                    <ListItem><Link href="#">KIDS</Link></ListItem>
                    <ListItem><Link href="#">STUDY</Link></ListItem>
                    <ListItem><Link href="#">CHAIR</Link></ListItem>
                    <ListItem><Link href="#">LIGHTING</Link></ListItem>
                    <ListItem><Link href="#">ACCESSORY</Link></ListItem>
                </List>
            </Warp>
        </Toobar>


        <CategoryWarp>
            <WarpUl>
                <CategorySub>
                    {/* BEDROOM */}
                    <CategorySub2>
                        <Good><GoodLink><br /></GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>
                    </CategorySub2>
                    {/* LIVINGLOOM */}
                    <CategorySub2>
                        <Good><GoodLink><br /></GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>
                    </CategorySub2>
                    {/* KITCHEN */}
                    <CategorySub2>
                        <Good><GoodLink>TABLE</GoodLink></Good>
                        <Good><GoodLink>DRAWER</GoodLink></Good>
                        <Good><GoodLink>ETC</GoodLink></Good>
                    </CategorySub2>
                    {/* KIDS */}
                    <CategorySub2>
                        <Good><GoodLink><br /></GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>
                    </CategorySub2>
                    {/* STUDY */}
                    <CategorySub2>
                        <Good><GoodLink>DESK</GoodLink></Good>
                        <Good><GoodLink>CHAIR</GoodLink></Good>
                        <Good><GoodLink>BOOKCASE</GoodLink></Good>
                    </CategorySub2>
                    {/* CHAIR */}
                    <CategorySub2>
                        <Good><GoodLink>STOOL</GoodLink></Good>
                        <Good><GoodLink>SYSTEM</GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>

                    </CategorySub2>
                    {/* LIGHTING */}
                    <CategorySub2>
                        <Good><GoodLink>STAND</GoodLink></Good>
                        <Good><GoodLink>PENDANT</GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>

                    </CategorySub2>
                    {/* ACCESSORY */}
                    <CategorySub2>
                        <Good><GoodLink>JEWELRY</GoodLink></Good>
                        <Good><GoodLink>SCARF</GoodLink></Good>
                        <Good><GoodLink><br /></GoodLink></Good>

                    </CategorySub2>
                </CategorySub>
            </WarpUl>
        </CategoryWarp>


    </Container>


)















