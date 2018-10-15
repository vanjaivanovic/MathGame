import React, { Component } from 'react';

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: "zzzZ..."
    }
  
    this.callGameChoice = this.callGameChoice.bind(this);
  }

callGameChoice(){
  const { gameOfChoice } = this.props;

  this.setState({
    welcomeMessage: "Hellooo!"
  })

  setTimeout(function() { 
      gameOfChoice();
     }.bind(this), 1600)
}

render(){
  return(
    <div className="happy">
      <h1>{this.state.welcomeMessage}</h1>
      <div className="col-12 check">
        <input id="check" type="checkbox" onClick={this.callGameChoice} />
        <label for="check"></label>
      </div>
    </div>
  )
 }
}


export default StartPage;