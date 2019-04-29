import React, { Component } from 'react';
import GameDescriptionJSON from '../JSON/GameDescription.json';

class WholeGameDescriptionPopUp extends Component {

  render(){

      const { closeWholeGameDescription, gameDescriptionIndex } = this.props;

      let gameDescriptionArray = GameDescriptionJSON.GameDescription[gameDescriptionIndex];
      let gameDescriptionTitle = gameDescriptionArray.gameTitle;
      let gameDescriptionSectionOne = gameDescriptionArray.gameDescriptionSectionOne;
      let gameDescriptionSectionTwo = gameDescriptionArray.gameDescriptionSectionTwo;
      let gameDescriptionSectionThree = gameDescriptionArray.gameDescriptionSectionThree;

    return(
     
        <div className="wholeGameDescriptionPopUp col-sm-12">
          
         <div className="wholeGameDescriptionContent col-sm-10">
          <div id="gameDescriptionContent" className="row">
            <img className="col-sm-3" src={require("../Images/dorisHint2.png")} alt="Babydoris" />

            <div className="col-sm-7 aboutWholeGameDescriptionTitle">
              <h1>{gameDescriptionTitle}</h1> 
            </div>

            <div className="col-sm-2 closeGameDescription" onClick={() => closeWholeGameDescription()}>
            	<span>&times;</span>
            </div>

            <div className="row">
              <div className="aboutWholeGameDescription">
              <p className="aboutWholeGame">{gameDescriptionSectionOne}</p>
              <p className="aboutWholeGame">{gameDescriptionSectionTwo}</p>
              <p className="aboutWholeGame">{gameDescriptionSectionThree} </p>
            </div> 
            </div>
         </div>
         
         </div>
        </div>
      
      )
  } 
}

export default WholeGameDescriptionPopUp;