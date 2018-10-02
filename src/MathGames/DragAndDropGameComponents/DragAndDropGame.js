import React, { Component } from 'react';
import Drag from './drag.js';

class DragAndDropGame extends Component {
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
     result3: "",
     result4: "",
     operator: "",
     count: 1,
     styleShake: ""
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.calc = this.calc.bind(this);
   this.correctAnswer = this.correctAnswer.bind(this);
   this.wrongAnswer = this.wrongAnswer.bind(this);
   this.drop = this.drop.bind(this);
 }

componentDidMount(){
  this.calc(this.state.operator);
}

 componentWillMount(){
   const { operator } = this.props;
   console.log(operator);

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

 calc(operator){
  if(operator === "+"){
   this.setState({
     result: this.state.a + this.state.b,
     result1: this.state.c + this.state.d,
     result2: this.state.e + this.state.f,
     result3: this.state.g + this.state.h,
     result4: this.state.i + this.state.j
   });
  }

  if(operator === "*"){
   this.setState({
     result: this.state.a * this.state.b,
     result1: this.state.c * this.state.d,
     result2: this.state.e * this.state.f,
     result3: this.state.g * this.state.h,
     result4: this.state.i * this.state.j
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
      let i = this.state.i;
      this.state.i = this.state.j;
      this.state.j = i;
    }

    this.setState({
     result: this.state.a - this.state.b,
     result1: this.state.c - this.state.d,
     result2: this.state.e - this.state.f,
     result3: this.state.g - this.state.h,
     result4: this.state.i - this.state.j
     
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

 allowDrop(ev) {
    ev.preventDefault();
}

 drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

 drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    this.correctAnswer();

}

  render() {
    return(

      <div className="container">
        <h1>Drag And Drop Game</h1>
        <div className="row col-sm-12">

            <div className="col-sm-8">
              <p> {this.state.a} {this.state.operator} {this.state.b} =
              <span id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></span></p> 
              
             </div>

             <button id="drag1" draggable="true" onDragStart={this.drag} height="50">{this.state.result}</button>


    
         </div>

         <div className="row">

            <div className="col-sm-4">
              <p> {this.state.c} {this.state.operator} {this.state.d} = </p>
             </div>

              <div className="col-sm-4">
                <button onClick={this.correctAnswer}> {this.state.result1} </button>
              </div>

    
         </div>

         <div className="row">

            <div className="col-sm-4">
              <p> {this.state.e} {this.state.operator} {this.state.f} = </p>
             </div>

              <div className="col-sm-4">
                <button onClick={this.correctAnswer}> {this.state.result2}  </button>
              </div>
    
         </div>

         <div className="row">

            <div className="col-sm-4">
              <p> {this.state.g} {this.state.operator} {this.state.h} = </p>
             </div>

              <div className="col-sm-4">
                <button onClick={this.correctAnswer}> {this.state.result3} </button>
              </div>
    
         </div>

         <div className="row">

            <div className="col-sm-4">
              <p> {this.state.i} {this.state.operator} {this.state.j} = </p>
             </div>

              <div className="col-sm-4">
                <button onClick={this.correctAnswer}> {this.state.result4} </button>
              </div>
    
         </div>
  	 </div>

    )
  }
}


export default DragAndDropGame;