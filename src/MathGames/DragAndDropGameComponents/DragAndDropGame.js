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
     result1: "",
     result2: "",
     result3: "",
     result4: "",
     operator: "",
     count: 0,
     styleShake: "",
     mathProblems: [],
     draggedItemNumber: "",
     draggedItemID: ""
   };

   this.setRandomNumber = this.setRandomNumber.bind(this);
   this.generateNumbers = this.generateNumbers.bind(this);
   this.calc = this.calc.bind(this);
   this.correctAnswer = this.correctAnswer.bind(this);

 }


dropedAnswerItem(draggedItemNumber, id){
  this.setState({
    draggedItemNumber: draggedItemNumber,
    draggedItemID: id
  })
}

targetAnswer(correctAnswer){
  if(this.state.draggedItemNumber === correctAnswer){
       this.setState({
      count: this.state.count + 1
      })

      this.setState(prevState => {
        let itemsToDrag = prevState.mathProblems;
        const index = itemsToDrag.findIndex(item => item.random === this.state.draggedItemNumber);
        const indexAnswerStyle = itemsToDrag.findIndex(item => item.result === this.state.draggedItemNumber);
        console.log("corrextanswer index:", indexAnswerStyle);

        itemsToDrag[index].random = "";
        itemsToDrag[indexAnswerStyle].correctAnswerStyle = "correctAnswerStyle";

        return { itemsToDrag };

      })
      
  } else {
     this.setState(prevState => {
        let itemsToDrag = prevState.mathProblems;
        const indexAnswerStyle = itemsToDrag.findIndex(item => item.result === correctAnswer);
        console.log("wronganserindex:", indexAnswerStyle);

        itemsToDrag[indexAnswerStyle].correctAnswerStyle = "wrongAnswerStyle";
        return { itemsToDrag };

      })

      setTimeout(function() { 
          this.setState(prevState => {
            let itemsToDrag = prevState.mathProblems;
            const indexAnswerStyle = itemsToDrag.findIndex(item => item.result === correctAnswer);

            itemsToDrag[indexAnswerStyle].correctAnswerStyle = "";
            return { itemsToDrag };
          })
      }.bind(this), 1000);   
  }

    this.correctAnswer(this.state.count);
}

componentDidMount(){
  const { showGameDescription } = this.props;

  showGameDescription(1);

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
    mathProblems: [
      { id: 0, correctAnswerStyle: "", a: this.state.a, operator:this.state.operator, b:this.state.b, result: this.state.a + this.state.b, random: this.state.i + this.state.j},
      { id: 1, correctAnswerStyle: "", a: this.state.c, operator:this.state.operator, b:this.state.d, result: this.state.c + this.state.d, random: this.state.a + this.state.b},
      { id: 2, correctAnswerStyle: "", a: this.state.e, operator:this.state.operator, b:this.state.f, result: this.state.e + this.state.f, random: this.state.g + this.state.h},
      { id: 3, correctAnswerStyle: "", a: this.state.g, operator:this.state.operator, b:this.state.h, result: this.state.g + this.state.h, random: this.state.e + this.state.f},
      { id: 4, correctAnswerStyle: "", a: this.state.i, operator:this.state.operator, b:this.state.j, result: this.state.i + this.state.j, random: this.state.c + this.state.d}
    ]
    })
  }

  if(operator === "*"){
     this.setState({
    mathProblems: [
      { id: 0, a: this.state.a, operator:this.state.operator, b:this.state.b, result: this.state.a * this.state.b, random: this.state.i * this.state.j},
      { id: 1, a: this.state.c, operator:this.state.operator, b:this.state.d, result: this.state.c * this.state.d, random: this.state.a * this.state.b},
      { id: 2, a: this.state.e, operator:this.state.operator, b:this.state.f, result: this.state.e * this.state.f, random: this.state.g * this.state.h},
      { id: 3, a: this.state.g, operator:this.state.operator, b:this.state.h, result: this.state.g * this.state.h, random: this.state.e * this.state.f},
      { id: 4, a: this.state.i, operator:this.state.operator, b:this.state.j, result: this.state.i * this.state.j, random: this.state.c * this.state.d}
    ]
  })
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
      mathProblems: [
      { id: 0, a: this.state.a, operator:this.state.operator, b:this.state.b, result: this.state.a - this.state.b, random: this.state.i - this.state.j},
      { id: 1, a: this.state.c, operator:this.state.operator, b:this.state.d, result: this.state.c - this.state.d, random: this.state.a - this.state.b},
      { id: 2, a: this.state.e, operator:this.state.operator, b:this.state.f, result: this.state.e - this.state.f, random: this.state.g - this.state.h},
      { id: 3, a: this.state.g, operator:this.state.operator, b:this.state.h, result: this.state.g - this.state.h, random: this.state.e - this.state.f},
      { id: 4, a: this.state.i, operator:this.state.operator, b:this.state.j, result: this.state.i - this.state.j, random: this.state.c - this.state.d}
    ]
     
   });
  }


 }

/* Display answer for the 'Equals to' */
correctAnswer(correctAnswer){
  const { finishedGameOfFive } = this.props;

  finishedGameOfFive(correctAnswer);
}


  render(){
    return(
        <div className="offset-1 col-sm-9 items">
          {this.state.mathProblems.map((mathProblem, index) => (
            <div className="row dragAndDropExpression">
              <Drop mathProblem={mathProblem} result={mathProblem} handleDrop={(correctAnswer) => this.targetAnswer(correctAnswer)}/>
              <Drag key={index} mathProblem={mathProblem} 
              drag={(draggedItem, id) => this.dropedAnswerItem(draggedItem, id)} />
            </div>
          ))}
        </div>
    )
  }
}

export default DragDropContext(TouchBackend({ enableTouchEvents: true, enableMouseEvents: true }))(DragAndDropGame);