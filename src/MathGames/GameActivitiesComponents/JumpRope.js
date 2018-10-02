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
    index: 0
  }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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
     b: this.generateNumbers()
   });
 }

/*Generates random number between 0-10 to A*/
 generateNumbers(){
   return Math.floor(Math.random() * 11);
 }

 calc(){
   this.setState({
     result: this.state.a + this.state.b
   });
 }

 handleChange(event){
  this.setState({
    value: event.target.value
  });


  event.preventDefault();
 }

 handleSubmit(event){
   if(this.state.result == this.state.value && this.state.index < 2){
      this.setState({
        count: this.state.count + 1
      });
        setTimeout(function() { //Start the timer to get a new mathexpression after 2,5 seconds
          this.setState({
            index: this.state.index + 1,
            value: ""
          });
          this.setRandomNumber();
          this.calc();
        }.bind(this), 1000);

        this.callFinishedGame();
    } else {

    console.log('fel svar, försök igen');
    }

  event.preventDefault();
 
 }

callFinishedGame(){ 
   const { finishedGame } = this.props;
      let count = this.state.count;
      finishedGame(count);
}


  render(){
    let index = this.state.index;
    let JumpRopeGameArray = JumpRope.JumpRopeGame;
    let SectionOne = JumpRopeGameArray[index].partOne;
    let SectionTwo = JumpRopeGameArray[index].partTwo;
    let SectionThree = JumpRopeGameArray[index].partThree;
    let a = this.state.a;
    let b = this.state.b;

    console.log(JumpRopeGameArray);

    return(
      <div>
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