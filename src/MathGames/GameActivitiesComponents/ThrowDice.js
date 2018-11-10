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
    diceShakeAnimation: "diceStyle",
    wrongAnswerMsg: ""
  }

  this.compareFinalScores = this.compareFinalScores.bind(this);
  this.rollTheDice = this.rollTheDice.bind(this);
  this.compareAnswerWithResultPlayerOne = this.compareAnswerWithResultPlayerOne.bind(this);
  this.compareAnswerWithResultPlayerTwo = this.compareAnswerWithResultPlayerTwo.bind(this);
}

componentDidMount(){
  const { showGameDescription } = this.props;

  showGameDescription(4);

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

  this.rollTheDice();

}

handleAplusBPlayerOne(b){
   this.setState({
        resultPlayerOne: this.state.a[this.state.indexPlayerOne] + b,
        diceShakeAnimation: ""
      });

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
	let answer = parseInt(event.target.value); 
  let inputID = event.target.id;

	if(answer === this.state.resultPlayerOne){
    event.target.style.background = '#42f4d9';

		let a = this.state.a
		a.push(this.state.resultPlayerOne);

		let score = this.state.scorePlayerOne;
		score.push(this.state.resultPlayerOne);
	
		console.log('rätt');
		this.setState({
			a: a,
			scorePlayerOne: score,
      indexPlayerOne: this.state.indexPlayerOne + 1
		});
	
		this.calcScorePlayerOne();

    inputID = Number(inputID) + 1;

    if(inputID < 6){
      document.getElementById(inputID).disabled = false;
    }

	} else {
    let inputStyle = event.target;
    inputStyle.style.background = 'red';
		this.setState({
      wrongAnswerMsg: "Försök igen!"
    })

    setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        wrongAnswerMsg: ""
      });

      inputStyle.style.background = "yellow";
    }.bind(this), 1000)
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
	let answer = parseInt(event.target.value);
  let inputID = event.target.id;

	if(answer === this.state.resultPlayerTwo){
    event.target.style.background = '#42f4d9';

		let c = this.state.c
		c.push(this.state.resultPlayerTwo);

		let score = this.state.scorePlayerTwo;
		score.push(this.state.resultPlayerTwo);

		this.setState({
			c: c,
			scorePlayerTwo: score,
      indexPlayerTwo: this.state.indexPlayerTwo + 1
		});

		this.calcScorePlayerTwo();

    inputID = Number(inputID) + 1;  

    if(inputID < 6){
      document.getElementById(inputID).disabled = false;
    }

    document.getElementById('dice').disabled = false;
    document.getElementById('rollDiceButton').disabled = false;

	} else {
    let inputStyle = event.target;
    inputStyle.style.background = 'red';

		this.setState({
      wrongAnswerMsg: "Försök igen!"
    });

      setTimeout(function() { //Start the timer to get a new mathexpression after 1 second
      this.setState({
        wrongAnswerMsg: ""
      });

      inputStyle.style.background = 'yellow';

    }.bind(this), 1000);
	}
}

calcScorePlayerOne(){
	let scoreArray = this.state.scorePlayerOne;
	let totalScore = 0;

	for(let i=0; i < scoreArray.length; i++){
		totalScore += scoreArray[(i)];
		this.setState({
			totalResultPlayerOne: totalScore,
		});
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
		});
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
		 }.bind(this), 2000)
	}
}

compareFinalScores(){
	if(this.state.totalResultPlayerOne > this.state.totalResultPlayerTwo){
		this.setState({
			winner: "Vinnaren är Spelare 1"
		});

	} if(this.state.totalResultPlayerOne < this.state.totalResultPlayerTwo) {
		this.setState({
			winner: "Vinnaren är Spelare 2"
		});

	} if(this.state.totalResultPlayerOne === this.state.totalResultPlayerTwo) {
    this.setState({
      winner: "Det är oavgjort"
    });
  }

		const { finishedThrowDiceGame } = this.props;
		finishedThrowDiceGame(); 

}

rollTheDice() {
  
      let faceValue = Math.floor(Math.random() * 6);
      let output = "&#x268" + faceValue + "; ";

      let rollDiceResultsArray = this.state.rollDiceResults;

      rollDiceResultsArray.push(faceValue + 1);
      let b = faceValue + 1;
      let d = faceValue + 1;

      this.setState({
        rollDiceResults: rollDiceResultsArray,
        diceShakeAnimation: "diceShake"
      })

    document.getElementById('dice').innerHTML = output;
    document.getElementById('dice').disabled = true;
    document.getElementById('rollDiceButton').disabled = true;

    this.handleAplusBPlayerOne(b);
    this.handleCplusDPlayerTwo(d);
}

  render() {

    const { showHint } = this.props;

    return(
      <div>
           <div className="row title">
          <h1 className="col-5"> {this.state.winner} </h1>
         </div>
 
      <div className="row diceGame">
     
          <div className="dice col-12 col-sm-4">
              <h1>Spelare 1</h1>
              <h2>Resultat: <span>{this.state.totalResultPlayerOne}</span></h2>
            
            <div className="row">
              <form className="col-12">
                  <input className="inputDice" type="number" placeholder={this.state.a[0]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice" type="number" placeholder={this.state.rollDiceResults[0]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="0" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerOne} />  
              </form>   
            </div>



            <div className="row">
               <form className="col-12">
                  <input className="inputDice" type="number" placeholder={this.state.a[1]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice" type="number" placeholder={this.state.rollDiceResults[1]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="1" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerOne} disabled />  
              </form>
            </div>


            <div className="row">
              <form className="col-12">
                  <input className="inputDice" type="number" placeholder={this.state.a[2]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice" type="number" placeholder={this.state.rollDiceResults[2]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="2" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerOne} disabled />  
              </form>
            </div>

            </div>
            
         <div className="col-sm-3 diceButtons">  
             <h3>{this.state.wrongAnswerMsg}</h3>       
            <div id="dice" className={this.state.diceShakeAnimation} onClick={this.rollTheDice}>
            </div>
            <div className="col-4 rollDice">
               <button id="rollDiceButton" className="diceBtn" onClick={this.rollTheDice}><i class="fas fa-dice fa-2x"></i><p>Kasta tärning</p></button>
            </div>
         </div>

          <div className="dice2 col-12 col-sm-4">
              <h1>Spelare 2</h1>
              <h2>Resultat: {this.state.totalResultPlayerTwo}</h2>

               <div className="row">
              <form className="col-12">
                  <input className="inputDice" type="number" placeholder={this.state.c[0]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice" type="number" placeholder={this.state.rollDiceResults[3]} disabled  />
                  <span className="operatorEquale">=</span>
                  <input id="3" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerTwo}  />  
              </form>   
            </div>



            <div className="row">
               <form className="col-12">
                  <input className="inputDice" type="number" placeholder={this.state.c[1]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice" type="number" placeholder={this.state.rollDiceResults[4]} disabled />
                  <span className="operatorEquale">=</span>
                  <input id="4" className="inputDice correct" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} disabled />  
              </form>
            </div>


            <div className="row">
              <form className="col-12">
                  <input className="inputDice" type="number" placeholder={this.state.c[2]} disabled /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="inputDice" type="number" placeholder={this.state.rollDiceResults[5]} disabled />
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