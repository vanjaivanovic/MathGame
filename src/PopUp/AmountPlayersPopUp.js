import React, { Component } from 'react';

class PlayerAmountPopUp extends Component {

  render(){

      const { chooseOnePlayer, chooseTwoPlayers } = this.props;

    return(              
      <div className="throwDicePlayerAmount col-sm-6">
        <p>Spelar du mot en kompis eller önskar du spela mot mig?</p>

        <div className="row"> 
            <button className="offset-sm-1 col-sm-5 choosePlayerAmount" onClick={chooseTwoPlayers}>Spela mot en kompis</button> 
            <button className="col-sm-5 choosePlayerAmount" onClick={chooseOnePlayer}>Spela mot dig</button>    
        </div>
      </div>  
      )
  } 
}

export default PlayerAmountPopUp;