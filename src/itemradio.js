import React from 'react';
import './style.css';

class Itemradio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h5>Choose shape</h5>
                {/* <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio2" value="house2" checked={this.props.selectedOption === "house2"} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Second building</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio3" value="girl" checked={this.props.selectedOption === "girl"} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Third building</label>
                </div> */}
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio3" value="circle" checked={this.props.selectedOption === "circle"} />
                    <label className="form-check-label" htmlFor="inlineRadio3">circle</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio3" value="square" checked={this.props.selectedOption === "square"} />
                    <label className="form-check-label" htmlFor="inlineRadio3">square</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio3" value="triangle" checked={this.props.selectedOption === "triangle"} />
                    <label className="form-check-label" htmlFor="inlineRadio3">triangle</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio3" value="star" checked={this.props.selectedOption === "star"} />
                    <label className="form-check-label" htmlFor="inlineRadio3">star</label>
                </div>
                {/* <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio1" value="house1" checked={this.props.selectedOption === "house1"} />
                    <label className="form-check-label" htmlFor="inlineRadio1">house</label>
                </div> */}
            </React.Fragment>
        );
    }
}

export default Itemradio;
