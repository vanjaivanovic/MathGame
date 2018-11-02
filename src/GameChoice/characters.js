import React, { Component } from 'react';
import CharacterList from './CharacterList.js';
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types';
import 'react-perfect-scrollbar/dist/css/styles.css';

class ChooseCharacter extends Component {
	constructor(props) {
		super(props);
		this.state = {
		 condition: false,
		 selected: []
		}

		this.CharacterWasClicked = this.CharacterWasClicked.bind(this);
	}

	CharacterWasClicked(characters, characterIndex) {
		const { characterChoiceIsClicked } = this.props
		characterChoiceIsClicked(characterIndex);

		for(let i=0; i < characters.length; i++) {
			characters[i].selected = false;
		}

		characters[characterIndex].selected = true ;
	}

	render (){	
		return ( 
			<ul className="characterContainer col-xs-12 sm-offset-2 col-sm-7">
			<PerfectScrollbar ref = {(ref) => { this._scrollBarRef = ref; }}>
				<CharacterList CharacterWasClicked={this.CharacterWasClicked} />
			</PerfectScrollbar>
			 </ul>
			
  	)
	}
}

export default ChooseCharacter;