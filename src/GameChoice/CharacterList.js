import React, { Component } from 'react';
import CharacterInfo from './info.json';

class CharacterList extends Component {
  constructor(props){
    super(props);
    
  }


  render(){

    const { CharacterWasClicked } = this.props;
    const { CharacterClass } = this.props;

    return (
      <div>
        {CharacterInfo.map((CharacterDetail, index) => {
          return (
             <li key={index} className={CharacterClass} >
               <div className="image col-12 col-sm-10">
                  <img src={require(`../Images/${CharacterDetail.personImage}`)} alt={CharacterDetail.name} onClick={() => CharacterWasClicked(CharacterDetail.id, index)} />
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
