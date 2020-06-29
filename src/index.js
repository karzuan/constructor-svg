import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Dementions from './dementions';
import Itemradio from './itemradio';
import Colorpart from './colorpart';
import Imageview from './imageview';
import * as serviceWorker from './serviceWorker';

// https://jakearchibald.github.io/ // svg converter


class Carkas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'circle',
      edge: '#4caf50',
      fill: '#ffeb3b'
      // activepart: false
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleEdgeColorChange = (color) => {
    this.setState({ edge: color.hex });
  };

  handleFillColorChange = (color) => {
    this.setState({ fill: color.hex });
  };


  render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          {/* <Dementions />
            <br/> */}
          <Itemradio
          selectedOption = {this.state.selectedOption}
          handleOptionChange = {this.handleOptionChange}
          />
            <br/>
          <Colorpart 
          edge={this.state.edge}
          fill={this.state.fill}
          handleEdgeColorChange={this.handleEdgeColorChange}
          handleFillColorChange={this.handleFillColorChange}
          />
        </div>
        <div className="col-sm-12 col-md-6 order-first order-sm-last">
          <Imageview 
          picture={this.state.selectedOption}
          edge = {this.state.edge}
          fill = {this.state.fill}
          />
        </div>
      </div>
    </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
      <Carkas />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
