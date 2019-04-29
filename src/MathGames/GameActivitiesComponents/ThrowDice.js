import React, { Component } from 'react';
import TouchHandler from 'react-touch';

class ThrowDice extends Component {
  constructor(props){
  super(props);
  this.state = {
    indexPlayerOne: 0,
    indexPlayerTwo: 0,

    a: [0],
    resultPlayerOne: "",
    scorePlayerOne: [],

    c: [0],
    resultPlayerTwo: "",
    scorePlayerTwo: [],

    winner: "Vem blir vinnaren?",
    operator: "",
    rollDiceResults: [],

    winnerStyle: "",
    winnerStylePlayerOne: "",
    winnerStylePlayerTwo: "",
    winnerAnimationPlayerResult: "",
    scoreStylePlayerOne: "scoreStyleNone",
    scoreStylePlayerTwo:  "scoreStyleNone",
    diceShakeAnimation: "",
    wrongAnswerMsg: "",
    diceButtonTrigged: false,
    shake: "diceBtn"
  }

  this.compareFinalScores = this.compareFinalScores.bind(this);
  this.dice = this.dice.bind(this);
  this.rollTheDice = this.rollTheDice.bind(this);
  this.compareAnswerWithResultPlayerOne = this.compareAnswerWithResultPlayerOne.bind(this);
  this.compareAnswerWithResultPlayerTwo = this.compareAnswerWithResultPlayerTwo.bind(this);
}


componentDidMount(){
  const { showGameDescription } = this.props;

  showGameDescription(5);

  const { operator } = this.props;

  if(operator === "+"){
    this.setState({
    operator: operator,
    a: [0],
    c: [0]
    });
  }
   if(operator === "-"){
    this.setState({
    operator: operator, 
    a: [20],
    c: [20]
    });
  }

   if(operator === "*"){
    this.setState({
    operator: operator, 
    a: [1],
    c: [1]
    });
  }

  this.dice();
}


handleAplusBPlayerOne(b){

  if(this.state.operator === "+"){
    this.setState({
        resultPlayerOne: this.state.a[this.state.indexPlayerOne] + b,
      });

  }

  if(this.state.operator === "-"){
     this.setState({
        resultPlayerOne: this.state.a[this.state.indexPlayerOne] - b,
      });
  }


  if(this.state.operator === "*"){
     this.setState({
        resultPlayerOne: this.state.a[this.state.indexPlayerOne] * b,
      });
  } 
}

compareAnswerWithResultPlayerOne(event){
   event.preventDefault();
   this.setState({
      diceShakeAnimation: ""
  })

  let answer = parseInt(event.target.value); 
  let inputID = event.target.id;

if(this.state.diceButtonTrigged){

  if(answer === this.state.resultPlayerOne){
  
    document.getElementById('rollDiceButton').disabled = false;
    event.target.style.background = '#42f4d9';

    let a = this.state.a
    a.push(this.state.resultPlayerOne);

    let score = this.state.scorePlayerOne;
    score.push(this.state.resultPlayerOne);

    this.setState({
      a: a,
      scorePlayerOne: score,
      indexPlayerOne: this.state.indexPlayerOne + 1,
      diceButtonTrigged: false
    });
  
    this.calcScorePlayerOne();

    inputID = Number(inputID) + 1;

    if(inputID < 6){
      document.getElementById(inputID).disabled = false;
    }

  } else {

    let inputStyle = event.target;
    inputStyle.style.background = 'red';

    document.getElementById('rollDiceButton').disabled = false;
    document.getElementById('dice').disabled = false;
  }

  } else {
  
      this.setState({
         wrongAnswerMsg: "Kom ihåg att kasta tärningen först!",
         shake: "shakeDiceButton"
      });

      setTimeout(function(){
        this.setState({
          wrongAnswerMsg: "",
          shake: "diceBtn"
        });
      }.bind(this), 1500)
  }
}


handleCplusDPlayerTwo(d){

  if(this.state.operator === "+"){
    this.setState({
        resultPlayerTwo: this.state.c[this.state.indexPlayerTwo] + d
      });

  }

  if(this.state.operator === "-"){
     this.setState({
        resultPlayerTwo: this.state.c[this.state.indexPlayerTwo] - d
      });
  }


  if(this.state.operator === "*"){
     this.setState({
        resultPlayerTwo: this.state.c[this.state.indexPlayerTwo] * d
      });
  }

}

compareAnswerWithResultPlayerTwo(event){
  event.preventDefault();
  this.setState({
      diceShakeAnimation: ""
  })

  let answer = parseInt(event.target.value);
  let inputID = event.target.id;

  if(this.state.diceButtonTrigged){

    if(answer === this.state.resultPlayerTwo){
      
        document.getElementById('rollDiceButton').disabled = false;
        document.getElementById('dice').disabled = false;

        event.target.style.background = '#42f4d9';

        let c = this.state.c
        c.push(this.state.resultPlayerTwo);

        let score = this.state.scorePlayerTwo;
        score.push(this.state.resultPlayerTwo);

        this.setState({
          c: c,
          scorePlayerTwo: score,
          indexPlayerTwo: this.state.indexPlayerTwo + 1,
          diceButtonTrigged: false
        });

        this.calcScorePlayerTwo();

        inputID = Number(inputID) + 1;  
      
        if(inputID < 6){
          document.getElementById(inputID).disabled = false;
        }

     } else {
          
          let inputStyle = event.target;
          inputStyle.style.background = 'red';

          document.getElementById('rollDiceButton').disabled = false;
          document.getElementById('dice').disabled = false;
       }

    } else {
 
        this.setState({
         wrongAnswerMsg: "Kom ihåg att kasta tärningen först!",
         shake: "shakeDiceButton"
      });

      setTimeout(function(){
        this.setState({
          wrongAnswerMsg: "",
          shake: "diceBtn"
        });
      }.bind(this), 1500);
    }
 
}

calcScorePlayerOne(){
  let scoreArray = this.state.scorePlayerOne;
  let totalScore = 0;

  for(let i=0; i < scoreArray.length; i++){
    totalScore += scoreArray[(i)];
    this.setState({
      totalResultPlayerOne: totalScore,
      scoreStylePlayerOne: "scoreStylePlayerOne"
    });

    setTimeout(function(){
      this.setState({
        scoreStylePlayerOne: "scoreStyleNone"
      });
    }.bind(this), 1000);
  }

  this.showTheWinner();
}

calcScorePlayerTwo(){
  let scoreArray = this.state.scorePlayerTwo;
  let totalScore = 0;

  for(let i=0; i < scoreArray.length; i++){
    totalScore += scoreArray[(i)];

    this.setState({
      totalResultPlayerTwo: totalScore,
      scoreStylePlayerTwo: "scoreStylePlayerTwo"
    });


    setTimeout(function(){
      this.setState({
        scoreStylePlayerTwo: "scoreStyleNone"
      });
    }.bind(this), 1000);
  }

  this.showTheWinner();
}


showTheWinner(){
  let scoreArrayPlayerOne = this.state.scorePlayerOne; 
  let scoreArrayLengthPlayerOne = scoreArrayPlayerOne.length;

  let scoreArrayPlayerTwo = this.state.scorePlayerTwo;
  let scoreArrayLengthPlayerTwo = scoreArrayPlayerTwo.length;

  if(scoreArrayLengthPlayerOne && scoreArrayLengthPlayerTwo === 3){
     setTimeout(function() { 
      this.compareFinalScores();
     }.bind(this), 1300)
  }
}

compareFinalScores(){
  if(this.state.totalResultPlayerOne > this.state.totalResultPlayerTwo){
    this.setState({

      winnerStyle: "winnerAnimation",
      winnerStylePlayerOne: "winnerAnimationPlayer",
      winnerAnimationPlayerResult: "winnerAnimationPlayerResult",
      winner: "Vinnaren är Spelare 1"
    });

  } if(this.state.totalResultPlayerOne < this.state.totalResultPlayerTwo) {
    this.setState({
      winnerStyle: "winnerAnimation",
      winnerStylePlayerTwo: "winnerAnimationPlayer",
      winnerAnimationPlayerResult: "winnerAnimationPlayerResult",
      winner: "Vinnaren är Spelare 2"
    });

  } if(this.state.totalResultPlayerOne === this.state.totalResultPlayerTwo) {
    this.setState({
      winnerStyle: "winnerAnimation",
      winnerStylePlayerOne: "winnerAnimationPlayer",
      winnerStylePlayerTwo: "winnerAnimationPlayer",
      winnerAnimationPlayerResult: "winnerAnimationPlayerResult",
      winner: "Det är oavgjort"
    });
  }

    const { finishedThrowDiceGame } = this.props;
    finishedThrowDiceGame(); 

}

rollTheDice() {
    this.setState({
      diceShakeAnimation: "diceShake"
    });
      
    if(!this.state.diceButtonTrigged){
      let playAudio = new Audio();
      playAudio.src = require('../../Audio/dice.mp3');
      playAudio.play();

      document.getElementById('rollDiceButton').disabled = true;
      document.getElementById('dice').disabled = true;

      this.setState({
        diceButtonTrigged: true,
      });
      
      let faceValue = Math.floor(Math.random() * 6);
      let output = "&#x268" + faceValue + "; ";

      let rollDiceResultsArray = this.state.rollDiceResults;

      rollDiceResultsArray.push(faceValue + 1);
      let b = faceValue + 1;
      let d = faceValue + 1;

      this.setState({
        rollDiceResults: rollDiceResultsArray
      })

      document.getElementById('dice').innerHTML = output;

    
      if(this.state.onlyOnePlayer){
        this.handleAplusBPlayerOne(b);
      } else {    
        this.handleAplusBPlayerOne(b);
        this.handleCplusDPlayerTwo(d);
      }
   
    } else {
      this.setState({
         wrongAnswerMsg: "För att rulla tärningen måste du fylla i rätt svar. Lycka till!",
         diceShakeAnimation: ""
      });

       setTimeout(function() {
         this.setState({
            wrongAnswerMsg: ""
          });
      }.bind(this), 2300);
    }   
}

dice(){
  let faceValue = Math.floor(Math.random() * 6);
  let output = "&#x268" + faceValue + "; ";

  document.getElementById('dice').innerHTML = output;
}

  render() {
    const { showHint } = this.props;

    return(
      <div>
        <div className="row title">
          <h1 id={this.state.winnerStyle} className="col-5"> {this.state.winner} </h1>
         </div>

      <div className="row diceGame">
     
          <div className="dice col-12 col-sm-4">
              <h1 id={this.state.winnerStylePlayerOne}>Spelare 1</h1>
              <div className="row diceGameResult">
                <h2 id={this.state.winnerAnimationPlayerResult} className="col-sm-6">Resultat:</h2>
                <span className="col-sm-4" id={this.state.scoreStylePlayerOne}>{this.state.totalResultPlayerOne}</span>
              </div>
            
            <div className="row">
              <form className="col-12">
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.a[0]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.rollDiceResults[0]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="0" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerOne} />  
              </form>   
            </div>



            <div className="row">
               <form className="col-12">
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.a[1]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.rollDiceResults[1]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="1" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerOne} disabled />  
              </form>
            </div>


            <div className="row">
              <form className="col-12">
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.a[2]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.rollDiceResults[2]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="2" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerOne} disabled />  
              </form>
            </div>

            </div>
            
         <div className="col-sm-3 diceButtons">  
            <h3>{this.state.wrongAnswerMsg}</h3>  

            <div id={this.state.diceShakeAnimation}>
                <div id="dice" onClick={this.rollTheDice}></div>
            </div>

            <div className="col-4 rollDice">
               <button id="rollDiceButton" className={this.state.shake} onClick={this.rollTheDice}><i className="fas fa-dice fa-2x"></i><p>Kasta tärning</p></button>
            </div>
         </div>

          <div className="dice2 col-12 col-sm-4">
              <h1 id={this.state.winnerStylePlayerTwo}>Spelare 2</h1>
               <div className="row diceGameResult">
                <h2 id={this.state.winnerAnimationPlayerResult} className="col-sm-6">Resultat:</h2>
                <span className="col-sm-4" id={this.state.scoreStylePlayerTwo}>{this.state.totalResultPlayerTwo}</span>
              </div>

               <div className="row">
              <form className="col-12">
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.c[0]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.rollDiceResults[3]} disabled  />
                  <span className="operatorEquale">=</span>
                  <input id="3" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerTwo}  />  
              </form>   
            </div>



            <div className="row">
               <form className="col-12">
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.c[1]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.rollDiceResults[4]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="4" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} disabled />  
              </form>
            </div>


            <div className="row">
              <form className="col-12">
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.c[2]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice inputDiceDisabled" type="number" placeholder={this.state.rollDiceResults[5]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="5" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerTwo} disabled />  
              </form>
          </div>
       </div>
           
        </div>
      </div>

      )
  }

}

export default ThrowDice;