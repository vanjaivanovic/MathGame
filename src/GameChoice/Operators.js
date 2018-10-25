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
  const { startGameButtonIsClicked } = this.props;

  return(
      <div className="operatorsWrapper col-12 col-sm-6">
        <div className="row">
          <button id={this.state.additionButtonIsClickedStyle} className="plus operatorButton col-12 offset-2 col-sm-8" onClick={() => this.operatorIsChosen("+")}><i className="fas fa-plus"></i></button>
        </div>
        <div className="row">
          <button id={this.state.substractionButtonIsClickedStyle} className="minus  operatorButton col-12 offset-2 col-sm-8" onClick={() => this.operatorIsChosen("-")}><i className="fas fa-minus"></i></button>
        </div>
        <div className="row">
          <button id={this.state.multiplicationButtonIsClickedStyle} className="multiplication operatorButton col-12 offset-2 col-sm-8" onClick={() => this.operatorIsChosen("*")}><i className="fas fa-times"></i></button>
        </div>
        <div className="row">
         <StartGameButton startGameButtonIsClicked={startGameButtonIsClicked} />
        </div>
      </div>
    )
  }
}

export default ChooseOperator;