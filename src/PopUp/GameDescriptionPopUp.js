import React, { Component } from 'react';
import GameDescriptionJSON from '../JSON/GameDescription.json';

class GameDescriptionPopUp extends Component {

  render(){

      const { closeGameDescription, gameDescriptionIndex } = this.props;

      let gameDescriptionArray = GameDescriptionJSON.GameDescription[gameDescriptionIndex];
      let gameDescriptionTitle = gameDescriptionArray.gameTitle;
      let gameDescriptionContent = gameDescriptionArray.gameDescription;

    return(
     
        <div className="gameDescriptionPopUp col-sm-12">
          
         <div className="gameDescriptionContent col-sm-10">
          <div id="gameDescriptionContent" className="row">
            <img className="col-sm-3" src={require("../Images/dorisHint2.png")} alt="Babydoris" />
            <div className="col-sm-7 aboutGameContent">
              <h1>{gameDescriptionTitle}</h1>
              <p className="aboutGame">{gameDescriptionContent}</p>
            </div>  
            <div className="col-sm-2 closeGameDescription" onClick={() => closeGameDescription()}>
            	<span>&times;</span>
            </div>
         </div>
         
         </div>
        </div>
      
      )
  } 
}

export default GameDescriptionPopUp;