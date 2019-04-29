import React, { Component } from 'react';

class QuitGameButton extends Component {
  constructor(props){
    super(props);

    this.callpopUp = this.callpopUp.bind(this);
  }

    callpopUp(){
  const { popUp } = this.props;

  setTimeout(function() { 
    popUp()
    }.bind(this), 1000)  
}

  render(){
    
    return(
           <button className="col-1 quitGameButton" onClick={this.callpopUp}>Avsluta</button>
    )
  }
}

export default QuitGameButton;