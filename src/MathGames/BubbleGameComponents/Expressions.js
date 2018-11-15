import React, { Component } from 'react';
import BubbleAnswers from './Bubbles.js';

class MathExpression extends Component {

render(){
   const { NumberOne, Operator, NumberTwo, AnswerBox, bubbleGamesAnswerBoxStyle } = this.props;

  return(
        <div id="q">
           <span ref="num1">{NumberOne}</span>
           <span className="operatorSign" style={{minWidth: "40px"}}>{Operator}</span>
           <span ref="num2">{NumberTwo}</span>
           <button className="btn" id="equal">=</button>
           <span className={bubbleGamesAnswerBoxStyle}>{AnswerBox}</span>

        </div>
  )
 }
}

export default MathExpression;
