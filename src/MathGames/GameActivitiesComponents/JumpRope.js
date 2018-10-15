import React, { Component } from 'react';
import JumpRope from '../../JSON/AdditionJumpRope.json';

class JumpRopeGame extends Component {
constructor(props){
  super(props);
  this.state = {
    a: "",
    b: "",
    result: "",
    value: "",
    count: 1,
    index: 0,
    operatorIndex: 0,
    operator: ""
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


componentDidMount(){
  const { operator } = this.props;

    this.setState({
      operator: operator
    })

    if(operator === "-"){
      this.setState({
        operatorIndex: 1
      })
    }

  this.calc(operator);
}
 componentWillMount(){
  const { operator } = this.props;

   this.setRandomNumber(operator);

 }


setRandomNumber(operator){
   this.setState({
     a: this.generateNumbers(operator),
     b: this.generateNumbers(operator)
   });
 }

/*Generates random number between 1-10 to A*/
 generateNumbers(operator){
  let randomNumber = "";
  
  if(operator === "*"){
   randomNumber = Math.floor(Math.random() * 3) + 1; 
  } else {
  randomNumber = Math.floor(Math.random() * 11) + 1;
  }

  return randomNumber;
 }

 calc(operator){
  if(operator === "+"){
    this.setState({
         result: this.state.a + this.state.b
       });  
  }

   if(operator === "*"){
    this.setState({
         result: this.state.a * this.state.b
       });  
  }

   if(operator === "-"){
     if(this.state.a < this.state.b){
        let a = this.state.a;
        this.state.a = this.state.b;
        this.state.b = a;
      }
           this.setState({
             result: this.state.a - this.state.b,
           });
      }
 }

 handleChange(event){
  this.setState({
    value: event.target.value
  });


  event.preventDefault();
 }

 handleSubmit(event){
   if(this.state.result == this.state.value){
      this.setState({
        count: this.state.count + 1
      });
        if(this.state.index < 2){
          setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
            this.setState({
              index: this.state.index + 1,
              value: ""
            });
            this.setRandomNumber(this.state.operator);
            this.calc(this.state.operator);
          }.bind(this), 1000);
      }
    } else {

    console.log('fel svar, försök igen');
    }

  this.callFinishedGame();
  event.preventDefault();
 
 }

callFinishedGame(){ 
   const { finishedGame } = this.props;
      let count = this.state.count;
      finishedGame(count);
}


  render(){
    let index = this.state.index;
    let operatorIndex = this.state.operatorIndex;

    let JumpRopeGameArray = JumpRope.JumpRopeGame;
    let SectionOne = JumpRopeGameArray[operatorIndex][index].partOne;
    let SectionTwo = JumpRopeGameArray[operatorIndex][index].partTwo;
    let SectionThree = JumpRopeGameArray[operatorIndex][index].partThree;
    let a = this.state.a;
    let b = this.state.b;

    console.log(JumpRopeGameArray);

    return(
      <div className="jumpDiv">
        <p className="jumpRope">{SectionOne} {a} {SectionTwo} {b} {SectionThree} </p>
        <form onSubmit={this.handleSubmit}>
          <label>
          <input className="inputone" value={this.state.value} placeholder="Skriv ditt svar" type="number" onChange={this.handleChange} />
          </label>
          <input className="inputtwo" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default JumpRopeGame;