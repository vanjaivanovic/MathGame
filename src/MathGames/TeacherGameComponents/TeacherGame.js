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
     styleShakeOne: "",
     styleShakeTwo: "",
     styleShakeThree: "",
     styleShakeFour: "",
     styleShakeFive: "",
     operator: "",
     checkedOne: "Rätt",
     checkedTwo: "Fel",
     checkedThree: "Rätt",
     checkedFour: "Rätt",
     checkedFive: "Fel",
     rightAnswerStyleOne: "",
     rightAnswerStyleTwo: "",
     rightAnswerStyleThree: "",
     rightAnswerStyleFour: "",
     rightAnswerStyleFive: "",
     wrongOne: "Fel",
     wrongTwo: "Rätt",
     wrongThree: "Fel",
     wrongFour: "Fel",
     wrongFive: "Rätt"
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.setRandomNumberForMultiplication = this.setRandomNumberForMultiplication.bind(this);
   this.generateNumbersForMultiplication = this.generateNumbersForMultiplication.bind(this);

   this.calc = this.calc.bind(this);
   this.correctAnswer = this.correctAnswer.bind(this);
   this.wrongAnswer = this.wrongAnswer.bind(this);
 }

componentDidMount(){
  const { showGameDescription } = this.props;

  showGameDescription(1);
  
  this.calc(this.state.operator);
}

 componentWillMount(){
  const { operator } = this.props;

  if(operator === "+"){
    this.setState({
    operator: operator, 
    });

    this.setRandomNumber();
  }
   if(operator === "-"){
    this.setState({
    operator: operator, 
    });

    this.setRandomNumber();
  }

   if(operator === "*"){
    this.setState({
    operator: operator, 
    });

     this.setRandomNumberForMultiplication();
  }
  
   
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

  setRandomNumberForMultiplication(){
   this.setState({
     a: this.generateNumbersForMultiplication(),
     b: this.generateNumbersForMultiplication(),
     c: this.generateNumbersForMultiplication(),
     d: this.generateNumbersForMultiplication(),
     e: this.generateNumbersForMultiplication(),
     f: this.generateNumbersForMultiplication(),
     g: this.generateNumbersForMultiplication(),
     h: this.generateNumbersForMultiplication(),
     i: this.generateNumbersForMultiplication(),
     j: this.generateNumbersForMultiplication(),
     answerBox: "",
   });
 }

/*Generates random number between 0-10 to A*/
 generateNumbers(){
   return Math.floor(Math.random() * 15);
 }

 generateNumbersForMultiplication(){
   return Math.floor(Math.random() * 5) + 1;
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

 correctAnswer(answerToCheck){
    let playAudio = new Audio();
      playAudio.src = require('../../Audio/click.mp3');
      playAudio.play();   

  if(answerToCheck === 1){
    this.setState({
      count: this.state.count + 1,
      checkedOne: <i className="fas fa-check fa-2x"></i>,
      styleShakeOne: "",
      rightAnswerStyleOne: "rightAnswerStyleOne",
      wrongOne: "Fel",
    })

    document.getElementById("correctAnswerOne").disabled = true;
    document.getElementById("wrongAnswerOne").disabled = true;
    document.getElementById("wrongAnswerOne").style.background = "rgba(257, 74, 216, 0.6)";
  }

    if(answerToCheck === 2){
    this.setState({
      count: this.state.count + 1,
      checkedTwo: <i className="fas fa-check fa-2x"></i>,
      styleShakeTwo: "",
      rightAnswerStyleTwo: "rightAnswerStyleTwo",
      wrongTwo: "Rätt"
    })

    document.getElementById("correctAnswerTwo").disabled = true;
    document.getElementById("wrongAnswerTwo").disabled = true;
    document.getElementById("wrongAnswerTwo").style.background = "rgba(257, 74, 216, 0.6)";
  }

    if(answerToCheck === 3){
    this.setState({
      count: this.state.count + 1,
      checkedThree: <i className="fas fa-check fa-2x"></i>,
      styleShakeThree: "",
      rightAnswerStyleThree: "rightAnswerStyleThree",
      wrongThree: "Fel"
    })


    document.getElementById("correctAnswerThree").disabled = true;
    document.getElementById("wrongAnswerThree").disabled = true;
    document.getElementById("wrongAnswerThree").style.background = "rgba(257, 74, 216, 0.6)";
  }

    if(answerToCheck === 4){
    this.setState({
      count: this.state.count + 1,
      checkedFour: <i className="fas fa-check fa-2x"></i>,
      styleShakeFour: "",
      rightAnswerStyleFour: "rightAnswerStyleFour",
      wrongFour: "Fel"
    })


    document.getElementById("correctAnswerFour").disabled = true;
    document.getElementById("wrongAnswerFour").disabled = true;
    document.getElementById("wrongAnswerFour").style.background = "rgba(257, 74, 216, 0.6)";
  }

    if(answerToCheck === 5){
    this.setState({
      count: this.state.count + 1,
      checkedFive: <i className="fas fa-check fa-2x"></i>,
      styleShakeFive: "",
      rightAnswerStyleFive: "rightAnswerStyleFive",
      wrongFive: "Rätt"
    })


    document.getElementById("correctAnswerFive").disabled = true;
    document.getElementById("wrongAnswerFive").disabled = true;
    document.getElementById("wrongAnswerFive").style.background = "rgba(257, 74, 216, 0.6)";
  }
  
  const { finishedGameOfFive } = this.props;

  finishedGameOfFive(this.state.count);
}

wrongAnswer(shakeWrongAnswer){
  let playAudio = new Audio();
    playAudio.src = require('../../Audio/wrong.mp3');
    playAudio.play();

  if(shakeWrongAnswer === 1){
    this.setState({
        styleShakeOne: "shake",
        wrongOne: <i className="fas fa-times fa-2x"></i>,
        checkedOne: "Rätt",
        rightAnswerStyleOne: ""

      })  
  }

   if(shakeWrongAnswer === 2){
    this.setState({
        styleShakeTwo: "shake",
        wrongTwo: <i className="fas fa-times fa-2x"></i>,
        checkedTwo: "Fel",
        rightAnswerStyleTwo: ""
      })  
  }

   if(shakeWrongAnswer === 3){
    this.setState({
        styleShakeThree: "shake",
        wrongThree: <i className="fas fa-times fa-2x"></i>,
        checkedThree: "Rätt",
        rightAnswerStyleThree: ""
      })  
  }

   if(shakeWrongAnswer === 4){
    this.setState({
        styleShakeFour: "shake",
        wrongFour: <i className="fas fa-times fa-2x"></i>,
        checkedFour: "Rätt",
        rightAnswerStyleFour: ""
      })  
  }

   if(shakeWrongAnswer === 5){
    this.setState({
        styleShakeFive: "shake",
        wrongFive: <i className="fas fa-times fa-2x"></i>,
        checkedFive: "Fel",
        rightAnswerStyleFive: ""
      })  
  }
  
}

  render() {
    return(
    <div className="offset-1 col-sm-9 teacherGameDiv">
      <div className="row">

          <div className="offset-1 col-sm-4 teacherMathExpressionOne">
            <p> {this.state.a} {this.state.operator} {this.state.b} = {this.state.result} </p>
           </div>

            <div id={this.state.rightAnswerStyleOne} className="col-sm-3 teacherBtn rightAnswerBtn">
              <button id="correctAnswerOne" onClick={() => this.correctAnswer(1)}>{this.state.checkedOne}</button>
            </div>

            <div className="col-sm-3 teacherBtn">
              <button id="wrongAnswerOne" className={this.state.styleShakeOne} onClick={() => this.wrongAnswer(1)}>{this.state.wrongOne}</button>
            </div>
  
       </div>

       <div className="row">

          <div className="offset-1 col-sm-4 teacherMathExpressionTwo">
            <p> {this.state.c} {this.state.operator} {this.state.d} = {this.wrongAnswerNumber()} </p>
           </div>

            <div className="col-sm-3 teacherBtn rightAnswerBtn">
              <button id="wrongAnswerTwo" className={this.state.styleShakeTwo} onClick={() => this.wrongAnswer(2)}>{this.state.wrongTwo}</button>
            </div>

            <div id={this.state.rightAnswerStyleTwo} className="col-sm-3 teacherBtn">
              <button id="correctAnswerTwo"  onClick={() => this.correctAnswer(2)}>{this.state.checkedTwo}</button>
            </div>

       </div>

       <div className="row">

          <div className="offset-1 col-sm-4 teacherMathExpressionThree">
            <p> {this.state.e} {this.state.operator} {this.state.f} = {this.state.result1} </p>
           </div>

            <div id={this.state.rightAnswerStyleThree} className="col-sm-3 teacherBtn rightAnswerBtn">
              <button id="correctAnswerThree" onClick={() => this.correctAnswer(3)}>{this.state.checkedThree}</button>
            </div>

            <div className="col-sm-3 teacherBtn">
              <button id="wrongAnswerThree" className={this.state.styleShakeThree} onClick={() => this.wrongAnswer(3)}>{this.state.wrongThree}</button>
            </div>
  
       </div>

       <div className="row">

          <div className="offset-1 col-sm-4  teacherMathExpressionFour">
            <p> {this.state.g} {this.state.operator} {this.state.h} = {this.state.result2} </p>
           </div>

            <div id={this.state.rightAnswerStyleFour} className="col-sm-3 teacherBtn rightAnswerBtn">
              <button id="correctAnswerFour" onClick={() => this.correctAnswer(4)}>{this.state.checkedFour}</button>
            </div>

            <div className="col-sm-3 teacherBtn">
              <button id="wrongAnswerFour" className={this.state.styleShakeFour} onClick={() => this.wrongAnswer(4)}>{this.state.wrongFour}</button>
            </div>

       </div>

       <div className="row">

          <div className="offset-1 col-sm-4 teacherMathExpressionFive">
            <p> {this.state.i} {this.state.operator} {this.state.j} = {this.wrongAnswerNumberTwo()} </p>
           </div>

            <div className="col-sm-3 teacherBtn rightAnswerBtn">
              <button id="wrongAnswerFive" className={this.state.styleShakeFive} onClick={() => this.wrongAnswer(5)}>{this.state.wrongFive}</button>
            </div>

            <div id={this.state.rightAnswerStyleFive} className="col-sm-3 teacherBtn">
              <button id="correctAnswerFive" onClick={() => this.correctAnswer(5)}>{this.state.checkedFive}</button>
            </div>

       </div>
  </div>
      )
  }
}

export default TeacherGame;