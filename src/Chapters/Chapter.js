import React, { Component } from 'react';
import Characters from '../GameChoice/Stories.json';

class Chapter extends Component { 
constructor(props) {
    super(props);
    this.callNewGame = this.callNewGame.bind(this);
  }

     callNewGame(){
      const { newGame } = this.props
      newGame();
    }
    

  render () {
  	let index = 0;
    let array = Characters.CharcterInfo;
    let CharacterStory = array[index].chapterOne;
    let ChapterTitle = array[index].chapter;
    let StoryTitle = array[index].storyTitle;
   
    return(
      	<div className="chapter col-12 col-sm-8">
          <div className="storyTitle col-8 offset-2">
            <h1>{ChapterTitle}</h1>
            <h2>{StoryTitle}</h2>
          </div>
          <p>{CharacterStory}</p>
          <button className="next" onClick={this.callNewGame}><span>Nästa</span></button>
        </div>
     
    )
  }
}

export default Chapter;