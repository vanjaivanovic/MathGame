import React, { Component } from 'react';
import Hints from '../../JSON/Hint.json';

class HintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintIndexCount: 0,
      hintShowing: false
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
    
    if(!this.state.hintShowing){
      this.setState({
        hintShowing:true
      })
      const { showHint } = this.props;

      showHint(this.state.hintIndexCount);  
        
    } else {
      this.setState({
        hintShowing: false
      })

      const { closeHint } = this.props;

      closeHint();
    }
    
  }

  render(){
    return(
      <button className="col-2 hintButton" onClick={this.callShowHintFunction}>
      <p className="hintBtnTitle">Ledtråd</p></button>
    )
  }
}

export default HintButton;