import React, { Component } from 'react';
import GameDescriptionJSON from '../JSON/GameDescription.json';

class WholeGameDescriptionPopUp extends Component {

  render(){

      const { closeWholeGameDescription, gameDescriptionIndex } = this.props;

      let gameDescriptionArray = GameDescriptionJSON.GameDescription[gameDescriptionIndex];
      let gameDescriptionTitle = gameDescriptionArray.gameTitle;
      let gameDescriptionContent = gameDescriptionArray.gameDescription;

    return(
     
        <div className="wholeGameDescriptionPopUp col-sm-12">
          
         <div className="wholeGameDescriptionContent col-sm-10">
          <div id="gameDescriptionContent" className="row">
            <img className="col-sm-3" src={require("../Images/dorisHint2.png")} alt="Babydoris" />
            <div className="offset-7 col-sm-2 closeGameDescription" onClick={() => closeWholeGameDescription()}>
            	<span>&times;</span>
            </div>
         </div>
         <div className="aboutWholeGameDescription">
          <h1>{gameDescriptionTitle}</h1>
          <p className="aboutGame">{gameDescriptionContent}</p>
        </div>  
         </div>
        </div>
      
      )
  } 
}

export default WholeGameDescriptionPopUp;