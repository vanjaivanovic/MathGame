import React, { Component } from 'react';

class QuitGameButton extends Component {
  constructor(props){
    super(props);
  }


  render(){
     const { showStartPage } = this.props;

    return(
           <button className="col-1 quitGameButton" onClick={showStartPage}>Avsluta</button>
    )
  }
}

export default QuitGameButton;