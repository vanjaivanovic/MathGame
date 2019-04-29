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
      <div className="hintBubble col-12 col-sm-8">
        <div className="row">
              <img className="hintDescriptionImage col-sm-2" src={require("../../Images/dorisHint2.png")} alt="Babydoris" />
               <p className="col-sm-8 hintDescriptionContent">{HintContent}</p>
              <span className="closeHint" onClick={() => closeHint()}>&times;</span>
        </div> 
      </div>

      )
  }
}

export default Hint;