import React, { Component } from 'react';
import BubbleAnswers from './Bubbles.js';

class MathExpression extends Component {

render(){
   const { NumberOne } = this.props;
   const { NumberTwo } = this.props;
   const { AnswerBox } = this.props;
   const { Operator } = this.props;

  return(
        <div id="q">
           <span ref="num1">{NumberOne}</span>
           <span style={{minWidth: "40px"}}>{Operator}</span>
           <span ref="num2">{NumberTwo}</span>
           <button className="btn" id="equal">=</button>
           <span>{AnswerBox}</span>

        </div>
  )
 }
}

export default MathExpression;
