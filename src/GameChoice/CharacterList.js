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
              <div className={CharacterDetail.selected ? 'characterIsSelected characterList col-12 col-sm-10' : 'characterList col-12 col-sm-10' }>
                    <img src={require(`../Images/${CharacterDetail.personImage}`)}
                     alt={CharacterDetail.name} onClick={() => CharacterWasClicked(this.state.Character, index)}/>
                
                    <p className="characterNames" onClick={() => CharacterWasClicked(this.state.Character, index)}>{CharacterDetail.name}</p>      
                </div>
              </li>
          )
        })}
      </div>
    )   
  }
        
}


export default CharacterList;