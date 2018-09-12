import React, { Component } from 'react';
import ChooseOperator from './Operators.js';

class ChooseGame extends Component {
  constructor(props){
    super(props);
  this.state = {
    additionButton: false
  }

   this.event = this.changetoTrue.bind(this);

}

changetoTrue(){
    this.setState({
      additionButton: true
    })

    console.log('hej');
  }

render(){
  return(
    <div>
      <h1>Nelson Mandela</h1>
      <ChooseOperator event={() => this.changetoTrue()} additionButton={this.state.additionButton} />
    </div>
  )
 }
}

export default ChooseGame;