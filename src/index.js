import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Dementions from './dementions';
import Itemradio from './itemradio';
import Colorpart from './colorpart';
import Imageview from './imageview';
import * as serviceWorker from './serviceWorker';


class Carkas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'house1'
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };


  render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Dementions />
            <br/>
          <Itemradio
          selectedOption = {this.state.selectedOption}
          handleOptionChange = {this.handleOptionChange}
          />
            <br/>
          <Colorpart />
        </div>
        <div className="col">
          <Imageview picture={this.state.selectedOption} />
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
