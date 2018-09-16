import React, { Component } from 'react';
import BubbleGame from '../MathGames/BubbleGame.js';
import ChooseCharacter from './Characters.js';
import ChooseOperator from './Operators.js';
import Chapter from '../Chapters/Chapter.js';
import { Container, Row, Col } from 'reactstrap';

class Games extends Component {
  constructor(props){
   super(props);
   this.state = { 
    additionButton : false,
    characterChoice : false,
    ChooseCharacter: <ChooseCharacter event={() => this.characterChoiceisClicked()} />,
    ChooseOperator: <ChooseOperator event={() => this.additionButtonisClicked()} />,
    Chapter: <Chapter />
   }
}


additionButtonisClicked(){
    this.setState({
      additionButton : true
    });
   }

characterChoiceisClicked(){
  this.setState({
      characterChoice : true
    });
}

  render(){
   
   let Game = "";
   let ChooseCharacter = this.state.ChooseCharacter;
   let ChooseOperator = this.state.ChooseOperator;
   let Chapter = "";


   if(this.state.additionButton && this.state.characterChoice){
    Game = <BubbleGame />
    ChooseCharacter = "";
    ChooseOperator = "";
  }

  return(
      <div className="row">    
        {ChooseCharacter}
        {ChooseOperator}
        {Game}
        {Chapter}
      </div>
    )
  }
}

export default Games;


