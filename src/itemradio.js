import React from 'react';
import './style.css';

class Itemradio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h5>Building type</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio1" value="house1" checked={this.props.selectedOption === "house1"} />
                    <label className="form-check-label" htmlFor="inlineRadio1">First building</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio2" value="house2" checked={this.props.selectedOption === "house2"} />
                    <label className="form-check-label" htmlFor="inlineRadio2">Second building</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" onChange={this.props.handleOptionChange} name="inlineRadioOptions" id="inlineRadio3" value="girl" checked={this.props.selectedOption === "girl"} />
                    <label className="form-check-label" htmlFor="inlineRadio3">Third building</label>
                </div>
            </React.Fragment>
        );
    }
}

export default Itemradio;
