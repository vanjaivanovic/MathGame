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
     count: 1,
     styleShake: "",
     operator: ""
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.calc = this.calc.bind(this);
   this.correctAnswer = this.correctAnswer.bind(this);
   this.wrongAnswer = this.wrongAnswer.bind(this);
 }

componentDidMount(){
  this.calc(this.state.operator);
}

 componentWillMount(){
  const { operator } = this.props;

  if(operator === "+"){
    this.setState({
    operator: operator, 
    });
  }
   if(operator === "-"){
    this.setState({
    operator: operator, 
    });
  }

   if(operator === "*"){
    this.setState({
    operator: operator, 
    });
  }
  
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
   return Math.floor(Math.random() * 15);
 }

 wrongAnswerNumber() {
  let wrongAnswerNumber = this.state.wrongAnswer1 + 3
  return wrongAnswerNumber;
 }

  wrongAnswerNumberTwo() {
  let wrongAnswerNumber = this.state.wrongAnswer2 + 3
  return wrongAnswerNumber;
 }

 calc(operator){
if(operator === "+"){
   this.setState({
       result: this.state.a + this.state.b,
       result1: this.state.e + this.state.f,
       result2: this.state.g + this.state.h,
       wrongAnswer1: this.state.c + this.state.d,
       wrongAnswer2: this.state.i + this.state.j
     });
  }

  if(operator === "*"){
    this.setState({
     result: this.state.a * this.state.b,
     result1: this.state.e * this.state.f,
     result2: this.state.g * this.state.h,
     wrongAnswer1: this.state.c * this.state.d,
     wrongAnswer2: this.state.i * this.state.j
   });
  }  

   if(operator === "-"){

    if(this.state.a < this.state.b){
      let a = this.state.a;
      this.state.a = this.state.b;
      this.state.b = a;
    }

    if(this.state.c < this.state.d){
      let c = this.state.c;
      this.state.c = this.state.d;
      this.state.d = c;
    }

    if(this.state.e < this.state.f){
      let e = this.state.e;
      this.state.e = this.state.f;
      this.state.f = e;
    }

    if(this.state.g < this.state.h){
      let g = this.state.g;
      this.state.g = this.state.h;
      this.state.h = g;
    }

     if(this.state.i < this.state.j){
      let i = this.state.j;
      this.state.i = this.state.j;
      this.state.j = i;
    }

     


         this.setState({
           result: this.state.a - this.state.b,
           result1: this.state.e - this.state.f,
           result2: this.state.g - this.state.h,
           wrongAnswer1: this.state.c - this.state.d,
           wrongAnswer2: this.state.i - this.state.j
        });
    } 
 }



/* Display answer for the 'Equals to' */

 correctAnswer(){
 	this.setState({
 		count: this.state.count + 1
 	})
	
	const { finishedGameOfFive } = this.props;

	finishedGameOfFive(this.state.count);
}

wrongAnswer(){
	this.setState({
		styleShake: "shake"
	})
}

  render() {
    return(
    <div className="container">
      <div className="row">

          <div className="col-sm-6">
            <p> {this.state.a} {this.state.operator} {this.state.b} = {this.state.result} </p>
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
            <p> {this.state.c} {this.state.operator} {this.state.d} = {this.wrongAnswerNumber()} </p>
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
            <p> {this.state.e} {this.state.operator} {this.state.f} = {this.state.result1} </p>
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
            <p> {this.state.g} {this.state.operator} {this.state.h} = {this.state.result2} </p>
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
            <p> {this.state.i} {this.state.operator} {this.state.j} = {this.wrongAnswerNumberTwo()} </p>
           </div>

            <div className="col-sm-3">
              <button onClick={this.wrongAnswer}> Rätt </button>
            </div>

            <div className="col-sm-3">
              <button onClick={this.correctAnswer}> Fel </button>
            </div>

  
       </div>
	</div>
      )
  }
}

export default TeacherGame;