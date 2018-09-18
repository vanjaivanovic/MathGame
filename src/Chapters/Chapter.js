import React, { Component } from 'react';
import Characters from '../GameChoice/Stories.json';

class Chapter extends Component { 
  render () {
  	let index = 0;
    let array = Characters.CharcterInfo;
    let CharacterStory = array[index].chapterOne;
    let ChapterTitle = array[index].chapter;
    let StoryTitle = array[index].storyTitle;
   
    return(
      	<div className="chapter col-12 col-sm-8">
          <h1>{ChapterTitle}</h1>
          <h2>{StoryTitle}</h2>
          <p>{CharacterStory}</p>
        </div>
     
    )
  }
}

export default Chapter;