import React from 'react';
import './style.css';
import { CirclePicker } from 'react-color';

function Colorpart(){
    return(
        <React.Fragment>
            <h5>Choose color</h5>
            <ul>
                <li>Roof</li>
                <li>Walls</li>
                <li>Windows</li>
                <li>Elements</li>
            </ul>
            <CirclePicker />
        </React.Fragment>
    );
}

export default Colorpart;