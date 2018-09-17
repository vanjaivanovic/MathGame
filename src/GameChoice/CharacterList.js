import React, { Component } from 'react';
import CharacterInfo from './info.json';

const CharacterList = props => {
        return (
          <div>
            {CharacterInfo.map((CharacterDetail, index) => {
              return (
	               <li>
	                 <div className="image col-xs-12">
	                    <img src={require("../Images/mandela.jpg")} alt={CharacterDetail.name} onClick={props.CharacterWasClicked} />
	                  </div>
	                  <p className="characterList">{CharacterDetail.name}</p>
	              	</li>
              )
            })}
          </div>
     )
}


export default CharacterList;
