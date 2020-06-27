import React from 'react';
import './style.css';

function Dementions() {
  return (
    <React.Fragment>
    <h5>Dimensions</h5>
    <form className="form-inline">
      <input type="text" className="form-control col-sm" id="item-length" placeholder="length"/>
      <input type="text" className="form-control col-sm meh" id="item-width" placeholder="width"/>
      <input type="text" className="form-control col-sm" id="item-heigth" placeholder="heigth"/>
    </form>
    </React.Fragment>
  );
}

export default Dementions;
