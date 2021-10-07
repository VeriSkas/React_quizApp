import React from 'react';
import './Input.css';

const Input = props => {
    const inputType = props.type || 'text';
    const classes = ['Input'];
    const htmlFor = `${inputType}-${Math.random()}`

    return (
        <div className={classes.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />
            <span>{props.errorMessage}</span>
        </div>
    )
}

export default Input