import React, { Component } from 'react';

class CorrectMathExpression extends Component {
  render(){

    const { expression, nextJumpRopeQuestion } = this.props; 

    return(
      <div className="fullMathExpressionDiv">
        <p className="col-sm-7 fullMathExpression">
          <span className="a">{expression[0]}</span>
          <span className="operator">{expression[1]}</span>
          <span className="b">{expression[2]}</span>
          <span className="equalSign">{expression[3]}</span>
          <span className="result">{expression[4]}</span>
        </p>
        <button className="offset-9 col-sm-2 next" onClick={nextJumpRopeQuestion}>Nästa</button>
      </div>
      )
  }
 
} 

export default CorrectMathExpression;