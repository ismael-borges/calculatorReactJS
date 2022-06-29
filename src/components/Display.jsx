import '../styles/Display.css';
import React from "react";

export default props => {
    return (
        <div className='display'>
            { props.value }
        </div>
    );
};