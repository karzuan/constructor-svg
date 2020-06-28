import React from 'react';
import './style.css';
import { CirclePicker } from 'react-color';

class Colorpart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activedge: false,
            activfill: false
        };
    }

    handleClick = (part) => {
        if (part === 'edge') {
            this.state.activedge ? this.setState({ activedge: false }) : this.setState({ activedge: true, activfill: false });
        };
        if (part === 'fill') {
            this.state.activfill ? this.setState({ activfill: false }) : this.setState({ activfill: true, activedge: false });
        };
    }



    render() {
        return (
            <React.Fragment>
                <h5>Change color</h5>
                <ul>
                    <li ><p className="objectPart" onClick={() => this.handleClick('edge')} >Edge</p></li>
                    {/*
                    add a state for each part open/closed and based on that I will render or not CirclePicker
                    { isTrue && <Component /> }
                    */}
                    {this.state.activedge && <div className="form-inline"><CirclePicker
                        color={this.props.edge}
                        onChangeComplete={this.props.handleEdgeColorChange}
                    /><span className="close" onClick={() => this.handleClick('edge')} > X </span></div>}

                    <li><p className="objectPart" onClick={() => this.handleClick('fill')}>Fill</p></li>
                    {this.state.activfill && <div className="form-inline"><CirclePicker
                        color={this.props.fill}
                        onChangeComplete={this.props.handleFillColorChange}
                    /><span className="close" onClick={() => this.handleClick('fill')} > X </span></div>}
                </ul>

            </React.Fragment>
        );
    }
}

export default Colorpart;