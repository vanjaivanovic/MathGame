import React, { Component } from 'react';

class ChooseOperator extends Component {
  constructor(props) {
    super(props);
      this.state = {
        additionButtonIsClickedStyle: "",
        substractionButtonIsClickedStyle: "",
        multiplicationButtonIsClickedStyle: ""

      }
  }

  operatorIsChosen(operator) {
    const { operatorButtonIsClicked } = this.props;
    operatorButtonIsClicked(operator);

    if(operator === "+")
      this.setState({
        additionButtonIsClickedStyle: "buttonIsClicked",
        substractionButtonIsClickedStyle: "",
        multiplicationButtonIsClickedStyle: ""
      })

     if(operator === "-")
      this.setState({
        substractionButtonIsClickedStyle: "buttonIsClicked",
        additionButtonIsClickedStyle: "",
        multiplicationButtonIsClickedStyle: ""
      })

     if(operator === "*")
      this.setState({
        multiplicationButtonIsClickedStyle: "buttonIsClicked",
        substractionButtonIsClickedStyle: "",
        additionButtonIsClickedStyle: ""

      })

  }

render(){
  return(
      <div className="operatorsWrapper col-12 col-sm-5 offset-sm-1">
        <div className="row">
          <button id={this.state.additionButtonIsClickedStyle} className="plus operatorButton col-12 col-sm-12" onClick={() => this.operatorIsChosen("+")}><i className="fas fa-plus"></i></button>
        </div>
        <div className="row">
          <button id={this.state.substractionButtonIsClickedStyle} className="minus  operatorButton col-12" onClick={() => this.operatorIsChosen("-")}><i className="fas fa-minus"></i></button>
        </div>
        <div className="row">
          <button id={this.state.multiplicationButtonIsClickedStyle} className="multiplication operatorButton col-12" onClick={() => this.operatorIsChosen("*")}><i className="fas fa-times"></i></button>
        </div>
      </div>
    )
  }
}

export default ChooseOperator;