import React, { Component } from 'react';
import CharacterInfo from './info.json';

class CharacterList extends Component {
  render(){

    const { CharacterWasClicked } = this.props

    return (
      <div>
        {CharacterInfo.map((CharacterDetail, index) => {
          return (
             <li>
               <div className="image col-xs-12">
                  <img src={require(`../Images/${CharacterDetail.personImage}`)} alt={CharacterDetail.name} onClick={CharacterWasClicked} />
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
