import React, { Component } from 'react';

class TeacherGame extends Component {
constructor(props) {
   super(props);
   this.state = {
     a: 0,
     b: 0,
     c: 0,
     d: 0,
     e: 0,
     f: 0,
     g: 0,
     h: 0,
     i: 0,
     j: 0,
     result: "",
     result1: "",
     result2: "",
     wrongAnswer1: "",
     wrongAnswer2: "",
     wrongAnswer3: "",
     wrongAnswer4: "",
     wrongAnswer5: "",
     count: 1,
     styleShake: ""
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.calc = this.calc.bind(this);
   this.correctAnswer = this.correctAnswer.bind(this);
   this.wrongAnswer = this.wrongAnswer.bind(this);
   this.callFinishedGame = this.callFinishedGame.bind(this);
 }

componentDidMount(){
  this.calc();
}
 componentWillMount(){
   this.setRandomNumber();
 }

 setRandomNumber(){
   this.setState({
     a: this.generateNumbers(),
     b: this.generateNumbers(),
     c: this.generateNumbers(),
     d: this.generateNumbers(),
     e: this.generateNumbers(),
     f: this.generateNumbers(),
     g: this.generateNumbers(),
     h: this.generateNumbers(),
     i: this.generateNumbers(),
     j: this.generateNumbers(),
     answerBox: "",
   });
 }

/*Generates random number between 0-10 to A*/
 generateNumbers(){
   return Math.floor(Math.random() * 11);
 }

 wrongAnswerNumber() {
  let wrongAnswerNumber = Math.floor(Math.random() * 15);
  let correctAnswerNumber = this.state.result;

  if(wrongAnswerNumber === correctAnswerNumber){
  	wrongAnswerNumber = wrongAnswerNumber + 1;
  }

  return wrongAnswerNumber;
 }

 calc(){
   this.setState({
     result: this.state.a + this.state.b,
     result1: this.state.e + this.state.f,
     result2: this.state.g + this.state.h,
     wrongAnswer1: this.wrongAnswerNumber(),
     wrongAnswer2: this.wrongAnswerNumber(),
     wrongAnswer3: this.wrongAnswerNumber(),
     wrongAnswer4: this.wrongAnswerNumber(),
     wrongAnswer5: this.wrongAnswerNumber(),
   });
 }

/* Display answer for the 'Equals to' */

 correctAnswer(){
  console.log('rätt!!')
}

wrongAnswer(){
	console.log('shake')
	this.setState({
		styleShake: "shake"
	})
}

callFinishedGame(){
	const { test } = this.props;

	test();
}

  render() {
    return(
    <div className="container">
      <div className="row">

          <div className="col-sm-6">
            <p> {this.state.a} + {this.state.b} = {this.state.result} </p>
           </div>

            <div className="col-sm-3">
              <button onClick={this.correctAnswer}> Rätt </button>
            </div>

            <div className="col-sm-3">
              <button onClick={this.wrongAnswer}> Fel </button>
            </div>

  
       </div>

       <div className="row">

          <div className="col-sm-6">
            <p> {this.state.c} + {this.state.d} = {this.state.wrongAnswer1} </p>
           </div>

            <div className="col-sm-3">
              <button className={this.state.styleShake} onClick={this.wrongAnswer}> Rätt </button>
            </div>

            <div className="col-sm-3">
              <button onClick={this.correctAnswer}> Fel </button>
            </div>

  
       </div>

       <div className="row">

          <div className="col-sm-6">
            <p> {this.state.e} + {this.state.f} = {this.state.result1} </p>
           </div>

            <div className="col-sm-3">
              <button onClick={this.correctAnswer}> Rätt </button>
            </div>

            <div className="col-sm-3">
              <button onClick={this.wrongAnswer}> Fel </button>
            </div>

  
       </div>

       <div className="row">

          <div className="col-sm-6">
            <p> {this.state.g} + {this.state.h} = {this.state.result2} </p>
           </div>

            <div className="col-sm-3">
              <button onClick={this.correctAnswer}> Rätt </button>
            </div>

            <div className="col-sm-3">
              <button onClick={this.wrongAnswer}> Fel </button>
            </div>

  
       </div>

       <div className="row">

          <div className="col-sm-6">
            <p> {this.state.i} + {this.state.j} = {this.state.wrongAnswer2} </p>
           </div>

            <div className="col-sm-3">
              <button onClick={this.wrongAnswer}> Rätt </button>
            </div>

            <div className="col-sm-3">
              <button onClick={this.correctAnswer}> Fel </button>
            </div>

  
       </div>


       <button onClick={this.callFinishedGame}>Teacher Game</button>
	</div>
      )
  }
}

export default TeacherGame;