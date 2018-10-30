import React, { Component } from 'react';

class CorrectMathExpression extends Component {
  render(){

    const { expression } = this.props; 

    return(
      <div>
        <p className="offset-4 col-sm-4 fullMathExpression">
          <span className="a">{expression[0]}</span>
          <span className="operator">{expression[1]}</span>
          <span className="b">{expression[2]}</span>
          <span className="equalSign">{expression[3]}</span>
          <span className="result">{expression[4]}</span>
        </p>
      </div>
      )
  }
 
} 

export default CorrectMathExpression;