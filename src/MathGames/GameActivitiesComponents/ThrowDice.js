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

    winner: ""
  }

  this.compareFinalScores = this.compareFinalScores.bind(this);
}


handleChangePlayerOne(event){
let b = parseInt(event.target.value); 
let index = this.state.indexPlayerOne ++ ;

	this.setState({
		resultPlayerOne: this.state.a[index] + b
	});

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
			scorePlayerOne: score
		});
	
		this.calcScorePlayerOne();

	} else {
		console.log('fel svar');
	}
}

handleChangePlayerTwo(event){
let d = parseInt(event.target.value); 
let index = this.state.indexPlayerTwo ++ ;

	this.setState({
		resultPlayerTwo: this.state.c[index] + d
	});

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
			scorePlayerTwo: score
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
	if(this.state.resultPlayerOne > this.state.resultPlayerTwo){
		this.setState({
			winner: "Spelare 1"
		});

	} else {
		this.setState({
			winner: "Spelare 2"
		});
	}

		const { finishedThrowDiceGame } = this.props;
		finishedThrowDiceGame(); 

}

  render() {

    return(
      <div className="row col-12">
        <div className="dice col-12 col-sm-6">
            <h1>Spelare 1</h1>
            <h2>Resultat: {this.state.totalResultPlayerOne} </h2>
          
          <div className="row">
            <form className="col-12">
              <label>
                <input className="col-2" type="number" placeholder={this.state.a[0]} /> 
                +
                <input className="col-2" type="number" onChange={this.handleChangePlayerOne.bind(this)} />
                =
                <input className="col-2" type="number" onChange={this.compareAnswerWithResultPlayerOne.bind(this)} />  
              </label>
            </form>   
          </div>



          <div className="row">
             <form className="col-12">
              <label>
                <input className="col-2" type="number" placeholder={this.state.a[1]} /> 
                +
                <input className="col-2" type="number" onChange={this.handleChangePlayerOne.bind(this)} />
                =
                <input className="col-2" type="number" onChange={this.compareAnswerWithResultPlayerOne.bind(this)} />  
              </label> 
            </form>
          </div>


          <div className="row">
            <form className="col-12">
              <label>
                <input className="col-2" type="number" placeholder={this.state.a[2]} /> 
                +
                <input className="col-2" type="number" onChange={this.handleChangePlayerOne.bind(this)} />
                =
                <input className="col-2" type="number" onChange={this.compareAnswerWithResultPlayerOne.bind(this)} />  
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
                <input className="col-2" type="number" placeholder={this.state.c[0]} /> 
                +
                <input className="col-2" type="number" onChange={this.handleChangePlayerTwo.bind(this)} />
                =
                <input className="col-2" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} />  
              </label> 
            </form>   
          </div>



          <div className="row">
             <form className="col-12">
              <label>
                <input className="col-2" type="number" placeholder={this.state.c[1]} /> 
                +
                <input className="col-2" type="number" onChange={this.handleChangePlayerTwo.bind(this)} />
                =
                <input className="col-2" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} />  
              </label> 
            </form>
          </div>


          <div className="row">
            <form className="col-12">
              <label>
                <input className="col-2" type="number" placeholder={this.state.c[2]} /> 
                +
                <input className="col-2" type="number" onChange={this.handleChangePlayerTwo.bind(this)} />
                =
                <input className="col-2" type="number" onChange={this.compareAnswerWithResultPlayerTwo.bind(this)} />  
              </label> 
            </form>
          </div>
          <h1>Vinnaren är: {this.state.winner} </h1>

        </div>
      </div>

      )
  }

}

export default ThrowDice;