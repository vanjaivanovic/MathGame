import React, { Component } from 'react';

class StartPage extends Component {
  constructor(props) {
    super(props);
  
    this.callGameChoice = this.callGameChoice.bind(this);
  }

callGameChoice(){
  const { gameOfChoice } = this.props;

  gameOfChoice();
}

render(){
  return(
    <div>
      <h1>Start Page</h1>
      <button className="startPageButton" onClick={this.callGameChoice}>Start your game</button>
    </div>
  )
 }
}


  export default StartPage;