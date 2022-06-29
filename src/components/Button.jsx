import React from "react";
import '../styles/Button.css';

const Button = props => {
    return (
        <button
        onClick={() => props.click && props.click(props.label)} 
        className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}
        `}>
            { props.label }
        </button>
    );
};

export default Button;