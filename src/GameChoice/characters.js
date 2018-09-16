import React, { Component } from 'react';
import info from './info.json';

const ChooseCharacter = props => {

let CharacterInfo = info.personFact;

const CharacterList = CharacterInfo.map(character => {
	return (
		<li key={character.id}>
		  <div className="image col-xs-12">
		  	<img src={require("../Images/mandela.jpg")} alt={character.name} onClick={props.event}/>
		  </div>
		  <p className="characterList">{character.name}</p>
		</li>
		)
	}
)

	 return( 
			<ul className="characterContainer col-xs-12 sm-offset-2 col-sm-6">
				{CharacterList}
		    </ul>
  );

}
export default ChooseCharacter;