import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url("https://fonts.googleapis.com/css?family=Nanum+Gothic&amp;subset=korean" rel="stylesheet")
    @import url("https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet")



    *{
        box-sizing: border-box;
        background-color:${props => props.theme.backgroundColor}      
    }

    body {
        color:${props => props.theme.footBlackColor}   
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    a {
        color:${props => props.theme.blackColor};
        font-family: 'Nanum Gothic', sans-serif;
        text-decoration: none;
        cursor: pointer;    

    }



`