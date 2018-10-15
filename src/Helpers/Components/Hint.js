import React, { Component } from 'react';
import Hints from '../../JSON/Hint.json';



class Hint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintIndex: 0,
      hintToShow: ""
    }
  }

  render(){

  const { hintIndex } = this.props;
  const { closeHint } = this.props;

  let allHints = Hints.HintInfo;
   
    let operatorHintIndex = 0;

   
    let HintContent = allHints[operatorHintIndex][hintIndex].hint;

    return(
      <div className="hint col-12 col-sm-8">

            <h1>{HintContent}</h1>
            <span onClick={() => closeHint()}>X</span>
      </div>

      )
  }
}

export default Hint;