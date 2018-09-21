import React, { Component } from 'react';
import Characters from '../GameChoice/Stories.json';

class Chapter extends Component { 
constructor(props) {
    super(props);
    this.state = {
      arrayIndex: 0,
    }

    this.callNewGame = this.callNewGame.bind(this);
    this.newChapter = this.newChapter.bind(this);
  }

     callNewGame(){
      const { newGame } = this.props
      newGame(this.state.arrayIndex);
      this.newChapter(this.state.arrayIndex);

    }

    newChapter(index){
      this.setState({
        arrayIndex: index + 1,
      })
    }
    

  render () {
  	let chapterIndex = 0;
    let array = Characters.CharcterInfo;
    let CharacterStory = array[chapterIndex].chapter;
    let ChapterTitle = array[chapterIndex].title;
    let StoryTitle = array[chapterIndex].storyTitle;
   
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