import React, { Component } from 'react';
import CharacterList from './CharacterList.js';

class ChooseCharacter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: [],
			id: ""
		}

		this.CharacterWasClicked = this.CharacterWasClicked.bind(this);
	}

	CharacterWasClicked(id, character) {
		const { characterChoiceIsClicked } = this.props

		this.setState({
			id: id
		})



		let selected = this.state.selected;

     if(selected.indexOf(id) == -1){
			selected.push(id);
	     this.setState({selected: selected});

	     console.log(this.state.selected)
     } 

		characterChoiceIsClicked(character);

				
	}

	render () {
		return ( 
				<ul className="characterContainer col-xs-12 sm-offset-2 col-sm-6">

					<CharacterList CharacterClass={(this.state.selected.indexOf(this.state.id) !== -1) ? "selected":"not-selected"} CharacterWasClicked={this.CharacterWasClicked} />
			  </ul>
  	)
	}
}

export default ChooseCharacter;