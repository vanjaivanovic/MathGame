import React, { Component } from 'react';

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
    operator: ""
  }

  this.compareFinalScores = this.compareFinalScores.bind(this);
}

componentDidMount(){
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

handleChangePlayerOne(event){

let b = parseInt(event.target.value);

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

	if(answer === this.state.resultPlayerOne){
    
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

	} else {
		console.log('fel svar');
	}
}

handleChangePlayerTwo(event){
let d = parseInt(event.target.value); 

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
	if(answer === this.state.resultPlayerTwo){
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
	} else {
		console.log('fel svar');
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
		 }.bind(this), 5000)
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
    let i,
        faceValue,
        output = '',
        diceCount = document.getElementById('diceCount').value || 1;
    for (i = 0; i < diceCount; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += "&#x268" + faceValue + "; ";
    }
    document.getElementById('dice').innerHTML = output;
}


  render() {

    return(
      <div>
        <div className="row title col-12">
          <h1> {this.state.winner} </h1>
        </div>

        <div className="row col-12 diceGame">
          <div className="dice col-12 col-sm-6">
              <h1>Spelare 1</h1>
              <h2>Resultat: {this.state.totalResultPlayerOne} </h2>
            
            <div className="row">
              <form className="col-12">
                <label>
                  <input className="col-2 inputDice" type="number" placeholder={this.state.a[0]} /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="col-2 inputDice" type="number" onChange={this.handleChangePlayerOne.bind(this)} />
                  <span className="operatorEquale">=</span>
                  <input className="col-2 inputDice" type="number" onChange={this.compareAnswerWithResultPlayerOne.bind(this)} />  
                </label>
              </form>   
            </div>



            <div className="row">
               <form className="col-12">
                <label>
                  <input className="col-2 inputDice" type="number" placeholder={this.state.a[1]} /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="col-2 inputDice" type="number" onChange={this.handleChangePlayerOne.bind(this)} />
                  <span className="operatorEquale">=</span>
                  <input className="col-2 inputDice" type="number" onChange={this.compareAnswerWithResultPlayerOne.bind(this)} />  
                </label> 
              </form>
            </div>


            <div className="row">
              <form className="col-12">
                <label>
                  <input className="col-2 inputDice" type="number" placeholder={this.state.a[2]} /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="col-2 inputDice" type="number" onChange={this.handleChangePlayerOne.bind(this)} />
                  <span className="operatorEquale">=</span>
                  <input className="col-2 inputDice" type="number" onChange={this.compareAnswerWithResultPlayerOne.bind(this)} />  
                </label> 
              </form>
            </div>


          </div>

          <div className="dice col-12 col-sm-6">
              <h1>Spelare 2</h1>
              <h2>Resultat: {this.state.totalResultPlayerTwo}</h2>

               <div className="row">
              <form className="col-12">
                <label>
                  <input className="col-2 inputDice" type="number" placeholder={this.state.c[0]} /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="col-2 inputDice" type="number" onChange={this.handleChangePlayerTwo.bind(this)} />
                  <span className="operatorEquale">=</span>
                  <input className="col-2 inputDice" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} />  
                </label> 
              </form>   
            </div>



            <div className="row">
               <form className="col-12">
                <label>
                  <input className="col-2 inputDice" type="number" placeholder={this.state.c[1]} /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="col-2 inputDice" type="number" onChange={this.handleChangePlayerTwo.bind(this)} />
                  <span className="operatorEquale">=</span>
                  <input className="col-2 inputDice" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} />  
                </label> 
              </form>
            </div>


            <div className="row">
              <form className="col-12">
                <label>
                  <input className="col-2 inputDice" type="number" placeholder={this.state.c[2]} /> 
                  <span className="operatorStyle">{this.state.operator}</span>
                  <input className="col-2 inputDice" type="number" onChange={this.handleChangePlayerTwo.bind(this)} />
                  <span className="operatorEquale">=</span>
                  <input className="col-2 inputDice" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} />  
                </label> 
              </form>
            </div>
    


          </div>
           <div className="row">
          <div className="dice col-12">
           <label className="titleTotalDice">Antal tärningar: </label>
           <input id="diceCount"type="number" min="1" max="4" /> 
           <input className="diceBtn" type="button" value="Kasta tärning" onClick={this.rollTheDice} />
            <div id="dice">
            </div>
            </div>
            </div>
        </div>
      </div>

      )
  }

}

export default ThrowDice;