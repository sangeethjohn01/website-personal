import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <div className="mtmbs"><input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}></input></div>;
            break;
        default:
            inputElement = <div className="mtmbs"><input 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}></input></div>;
            break;
    }
    return(
        <div className="mtmbs">{inputElement}</div>
    )
};

export default input;