import React, { Component } from 'react';
import Characters from '../GameChoice/Stories.json';
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types';
import 'react-perfect-scrollbar/dist/css/styles.css';

class Chapter extends Component { 
constructor(props) {
    super(props);
    this.state = {
      chapterIndex: 0,
      storyToTell: ""

    }

    this.callNewGame = this.callNewGame.bind(this);
  }

  componentWillMount(){
    const { chapter } = this.props;

    const { storyToTell } = this.props;

      this.setState({
        chapterIndex: chapter,
        storyToTell: storyToTell
      })

  }
     callNewGame(){
      const { newGameNewChapter } = this.props

      newGameNewChapter(this.state.chapterIndex);
  }

  render () {

    let index = this.state.chapterIndex;
    let characterIndex = this.state.storyToTell;

    let array = Characters.CharcterInfo;
    let CharacterStory = array[characterIndex][index].chapter;
    let ChapterTitle = array[characterIndex][index].title;
    let StoryTitle = array[characterIndex][index].storyTitle;
   
    return(
      	<div className="chapter col-12 col-sm-8">
          <div className="storyTitle col-8 offset-2">
            <h1>{ChapterTitle}</h1>
            <h2>{StoryTitle}</h2>
          </div>
          <div className="chapterContainer">
          <PerfectScrollbar ref = {(ref) => { this._scrollBarRef = ref; }}>
          <p>{CharacterStory}</p>
          <button className="next" onClick={this.callNewGame}><span>Nästa</span></button>
          </PerfectScrollbar>
          </div>
          
        </div>  
    )
  }
}

export default Chapter;