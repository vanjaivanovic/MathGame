import React, { Component } from 'react';
import Drag from './Drag.js';
import Drop from './Drop.js';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { DragDropContext } from 'react-dnd';

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
     styleShake: "",
     mathProblems: []
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.calc = this.calc.bind(this);
   this.correctAnswer = this.correctAnswer.bind(this);
   this.wrongAnswer = this.wrongAnswer.bind(this);

 }


dropedAnswerItem = (result, id) => {
    console.log(result, id);
    let resultArray= this.state.result;
    console.log(resultArray);
         
    

  
      if(resultArray[4] === result){
        console.log('rätt svar');
      
      } else {
        console.log('fel svar');
      }
    

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
  this.setState({
    mathProblems: [
      { id: 0, a: this.state.a, operator:this.state.operator, b:this.state.b, result: this.state.a + this.state.b, random: this.state.i + this.state.j},
      { id: 1, a: this.state.c, operator:this.state.operator, b:this.state.d, result: this.state.c + this.state.d, random: this.state.a + this.state.b},
      { id: 2, a: this.state.e, operator:this.state.operator, b:this.state.f, result: this.state.e + this.state.f, random: this.state.g + this.state.h},
      { id: 3, a: this.state.g, operator:this.state.operator, b:this.state.h, result: this.state.g + this.state.h, random: this.state.e + this.state.f},
      { id: 4, a: this.state.i, operator:this.state.operator, b:this.state.j, result: this.state.i + this.state.j, random: this.state.c + this.state.d}
    ],
    result: [this.state.a + this.state.b, this.state.c + this.state.d, 
     this.state.e + this.state.f, this.state.g + this.state.h,
     this.state.i + this.state.j]
  })

  if(operator === "+"){
   this.setState({
     result: [this.state.a + this.state.b, this.state.c + this.state.d, 
     this.state.e + this.state.f, this.state.g + this.state.h,
     this.state.i + this.state.j]
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


  render(){
    return(
      <div>
        <div className="items">
          {this.state.mathProblems.map((mathProblem, index) => (
            <div className="row">
              <Drop mathProblem={mathProblem} result={mathProblem} />
              <Drag key={mathProblem.id} mathProblem={mathProblem} handleDrop={() => this.dropedAnswerItem(mathProblem.random, index)} />
            </div>
          ))}
        </div>

        
      </div>
    )
  }
}

export default DragDropContext(TouchBackend({ enableTouchEvents: true, enableMouseEvents: true }))(DragAndDropGame);




