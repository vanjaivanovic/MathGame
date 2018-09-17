import React, { Component } from 'react';
import Characters from '../GameChoice/Stories.json';

class Chapter extends Component { 
  render () {
    let array = Characters.CharcterInfo;
    let CharacterStory = array[0].chapterOne;
   
    return(
      <div>
        <p>{CharacterStory}</p>
      </div>
    )
  }
}

export default Chapter;