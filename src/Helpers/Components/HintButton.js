import React, { Component } from 'react';
import Hints from '../../JSON/Hint.json';

class HintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintIndexCount: 0
    }

    this.callShowHintFunction = this.callShowHintFunction.bind(this);
  }
  
  callShowHintFunction(){
    if(this.state.hintIndexCount < 2){
      this.setState({
         hintIndexCount: this.state.hintIndexCount + 1,
      })
    } else {
      this.setState({
         hintIndexCount: 0
      })
    }
    
    const { showHint } = this.props;

    showHint(this.state.hintIndexCount);
  }

  render(){
    return(
      <button className="hintButton" onClick={this.callShowHintFunction}><i className="fab fa-reddit-alien fa-3x"></i></button>
    )
  }
}

export default HintButton;