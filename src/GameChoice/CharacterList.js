import React, { Component } from 'react';
import CharacterInfoJson from './info.json';

class CharacterList extends Component {
  constructor(props){
    super(props);
    Character: []
  }

  componentWillMount(){
      this.setState({
       Character: CharacterInfoJson
      });
  }

  render(){

    const { CharacterWasClicked } = this.props;
    const { CharacterClass } = this.props;

    return (
      <div>
        {this.state.Character.map((CharacterDetail, index) => {
          return (
             <li key={CharacterDetail.id}>
               <div className="image col-12 col-sm-10">
                  <img  className={CharacterDetail.selected ? 'characterIsSelected' : '' } src={require(`../Images/${CharacterDetail.personImage}`)}
                   alt={CharacterDetail.name} onClick={() => CharacterWasClicked(this.state.Character, index)} />
                </div>
                <p className="characterList">{CharacterDetail.name}</p>
              </li>
          )
        })}
      </div>
    )   
  }
        
}


export default CharacterList;