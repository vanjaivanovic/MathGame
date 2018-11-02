import React, { Component } from 'react';
import StartGameButton from './StartGameButton.js';

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
        multiplicationButtonIsClickedStyle: "",
        additionOperatorSpin: "operatorSpin",
        substractionOperatorSpin: "",
        multiplicationOperatorSpin: ""
      })

     if(operator === "-")
      this.setState({
        substractionButtonIsClickedStyle: "buttonIsClicked",
        additionButtonIsClickedStyle: "",
        multiplicationButtonIsClickedStyle: "",
        substractionOperatorSpin: "operatorSpin",
        additionOperatorSpin: "",
        multiplicationOperatorSpin: ""
      })

     if(operator === "*")
      this.setState({
        multiplicationButtonIsClickedStyle: "buttonIsClicked",
        substractionButtonIsClickedStyle: "",
        additionButtonIsClickedStyle: "",
        multiplicationOperatorSpin: "operatorSpin",
        additionOperatorSpin: "",
        substractionOperatorSpin: ""
      })

  }

render(){
  const { startGameButtonIsClicked } = this.props;

  return(
      <div className="operatorsWrapper col-12 col-sm-5">
        <div className="row">
          <button id={this.state.additionButtonIsClickedStyle} className="plus operatorButton col-12 col-sm-8" 
          onClick={() => this.operatorIsChosen("+")}><i id={this.state.additionOperatorSpin} className="fas fa-plus fa-3x"></i></button>
        </div>

        <div className="row">
          <button id={this.state.substractionButtonIsClickedStyle} className="minus  operatorButton col-12 col-sm-8" 
          onClick={() => this.operatorIsChosen("-")}><i id={this.state.substractionOperatorSpin} className="fas fa-minus fa-3x"></i></button>
        </div>

        <div className="row">
          <button id={this.state.multiplicationButtonIsClickedStyle} className="multiplication operatorButton col-12 col-sm-8" 
          onClick={() => this.operatorIsChosen("*")}><i id={this.state.multiplicationOperatorSpin} className="fas fa-times fa-3x"></i></button>
        </div>

        <div className="row">
         <StartGameButton startGameButtonIsClicked={startGameButtonIsClicked} />
        </div>
      </div>
    )
  }
}

export default ChooseOperator;