import React, { Component } from 'react';

class FinishButton extends Component {
  constructor(props) {
    super(props);

    this.callpopUp = this.callpopUp.bind(this);
  }
  

callpopUp(){
  const { popUp } = this.props;

  setTimeout(function() { 
    popUp()
    }.bind(this), 1000)  
}

  render(){
    return(
      <div className="offset-7 col-1">
      <div className="FinishButtonCheck">
        <input id="FinishButtonCheck" type="checkbox" onClick={this.callpopUp} placeHolder="Avsluta spelet" />
        <label htmlFor="FinishButtonCheck"></label>
      </div>
    </div>
      )
  }
}

export default FinishButton;

 