import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Container = styled.input`
    border: 1px solid #ccc;
    background: #fff;
    height: 22px;
    line-height: 20px;
    text-indent: 3px;
    padding: 0;
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
`;


const Input = ({ name, required, value, type, onChange }) => <Container
    name={name}
    required={required}
    value={ value }
    onChange={onChange}
    type={type}
/>


Input.prototype = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default Input;