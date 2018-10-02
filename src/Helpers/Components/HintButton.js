import React, { Component } from 'react';

class HintButton extends Component {
  constructor(props) {
    super(props);

    this.callShowHintFunction = this.callShowHintFunction.bind(this);
  }
  
  callShowHintFunction(){
    const { showHint } = this.props;

    showHint();
  }

  render(){
    return(
      <button className="hintButton" onClick={this.callShowHintFunction}><i className="fab fa-reddit-alien fa-3x"></i></button>
    )
  }
}

export default HintButton;