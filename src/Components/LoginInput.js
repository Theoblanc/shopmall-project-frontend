import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Container = styled.input`
    width: calc(100% - 12px);
    height: 40px;
    line-height: 40px;
    border: 1px solid #e0e0e0;
    padding-left: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    outline: 0;
`;


const Input = ({ name, required, value, type, onChange, placeholder}) => <Container
    name={name}
    required={required}
    value={ value }
    onChange={onChange}
    placeholder={placeholder}
    type={type}

/>


Input.prototype = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Input;