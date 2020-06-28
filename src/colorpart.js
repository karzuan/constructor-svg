import React from 'react';
import './style.css';
import { CirclePicker } from 'react-color';

class Colorpart extends React.Component{
    constructor(props) {
        super(props);
    }



    render(){
        return(
            <React.Fragment>
                <h5>Change color</h5>
                <ul>
                    <li>Edge</li>
                    <CirclePicker 
                    color={this.props.edge}
                    onChangeComplete={ this.props.handleEdgeColorChange }
                    />
                    <li>Fill</li>
                    <CirclePicker
                    color={this.props.fill}
                    onChangeComplete={ this.props.handleFillColorChange }
                    />
                </ul>

            </React.Fragment>
        );
    }
}

export default Colorpart;