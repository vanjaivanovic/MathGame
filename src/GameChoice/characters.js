import React, { Component } from 'react';
import CharacterList from './CharacterList.js';

class ChooseCharacter extends Component {
	constructor(props) {
		super(props);
		this.CharacterWasClicked = this.CharacterWasClicked.bind(this);
	}

	CharacterWasClicked(event) {
		event.preventDefault()
		const { characterChoiceisClicked } = this.props
		characterChoiceisClicked();
	}

	render () {
		return ( 
				<ul className="characterContainer col-xs-12 sm-offset-2 col-sm-6">
					<CharacterList CharacterWasClicked={this.CharacterWasClicked} />
			  </ul>
  	)
	}
}

export default ChooseCharacter;