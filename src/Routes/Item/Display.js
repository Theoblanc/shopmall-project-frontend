import React from "react";
import styled from "styled-components";

const DisplayWrap = styled.li`
    display: inline-block;
    width: 24.25%;

`

const FileWrap = styled.div`
    display: inline-block;
`

const File = styled.div`
    max-width: 100%;
    width: 280px;
    height: 280px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;

`;

const WrapText = styled.ul`
    padding-top: 15px;
    text-align: center;


    li{
        line-height: 1.8;
    }
`;



const Black = styled.span`

    width: 20px;
    height: 4px;
    overflow: hidden;

    background: #000000
    display: inline-block;
    margin: 3px 3px;
    border: 1px solid #ddd;
    line-height: 1.0;
`;

const DarkGray = styled(Black)`
    background: #666666;
`;


const Gray = styled(Black)`
    background:#cfcccc; 
`;

const White = styled(Black)`
background:#fff; 
`;

const LinkSpan = styled.span`
color: #333;
font-size: 10pt;
font-weight: normal;
text-decoration: none;
display: block;
border-bottom: 0px solid #ddd;
padding-bottom: 5px;
`
const Link = styled.a`
 &:hover {
    text-decoration: underline;
 }
`

const PriceText = styled.span`
color: #888;
font-size: 9pt;
font-weight: normal;
text-decoration: line-through;
`

const FinalPrice = styled.span`
color: #000000;
font-size: 10pt;
font-weight: bold;
text-decoration: none;
`



export default ({ id, item, price, finalPrice, files }) => {
    console.log(files);
    
    return (
    <DisplayWrap>
        <FileWrap>
        {files &&
        files.map((file) => (
          <File key={file.id} src={file.url}  />
        ))}

        </FileWrap>
           


    <WrapText>
        <li>
            <Black />
            <DarkGray />
            <Gray />
            <White />
        </li>

        <li>
            <LinkSpan>
                <Link> </Link>
                <span>{item}</span>
            </LinkSpan>
        </li>

        <li>
            <PriceText>
                &#92;{price}
            </PriceText>

        </li>

        <li>
            <FinalPrice>
                &#92;{finalPrice}
             </FinalPrice>
        </li>
        </WrapText>
    
    </DisplayWrap>

    );
};

