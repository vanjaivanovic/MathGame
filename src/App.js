import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleGame from './MathGames/BubbleGame.js';
import ChooseGame from './GameChoice/characters.js';


class App extends Component {
  
 render() {
  
  let GameChoice = <ChooseGame />;
  let MathGameScreen = "";

  if(this.props.additionButton){
    MathGameScreen = <BubbleGame />;
  }


   return (
     <div>
     {GameChoice}
     {MathGameScreen}

     </div>
   );
 }
}


export default App;
