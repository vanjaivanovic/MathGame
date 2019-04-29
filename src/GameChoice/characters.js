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
		 selected: [],
		 characterCompletedIndex: ""
		}

		this.CharacterWasClicked = this.CharacterWasClicked.bind(this);
		this.showCharacterBook = this.showCharacterBook.bind(this);
	
	}

	CharacterWasClicked(characters, characterIndex) {
		let playAudio = new Audio();
		playAudio.src = require('../Audio/click.mp3');
		playAudio.play();

		const { characterChoiceIsClicked } = this.props
		characterChoiceIsClicked(characterIndex);

		for(let i=0; i < characters.length; i++) {
			characters[i].selected = false;
		}

		characters[characterIndex].selected = true ;
	}

	showCharacterBook(characterBook, characterCompleted){
		const { showBookCompleted } = this.props;
		
		showBookCompleted(characterBook, characterCompleted);
	}

	render (){	
		const { characterCompletedIndex } = this.props;
		
		return ( 
			<ul className="characterContainer col-xs-12 sm-offset-2 col-sm-7">
				<PerfectScrollbar ref = {(ref) => { this._scrollBarRef = ref; }}>
					<CharacterList CharacterWasClicked={this.CharacterWasClicked} showCharacterBook={this.showCharacterBook} characterCompletedIndex={characterCompletedIndex} />
				</PerfectScrollbar>
			 </ul>
			
  	)
	}
}

export default ChooseCharacter;