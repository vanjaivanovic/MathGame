import React, { Component } from 'react';
import Characters from '../JSON/Stories.json';
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types';
import 'react-perfect-scrollbar/dist/css/styles.css';

class CharacterBook extends Component { 
constructor(props) {
    super(props);
    this.state = {
      chapterIndex: 0,
      storyToTell: "",
      lastChapter: false
    }

    this.nextChapter = this.nextChapter.bind(this);
    this.goBackToGameChoice = this.goBackToGameChoice.bind(this);
  }

  componentWillMount(){
    const { characterCompleted } = this.props;
    
    this.setState({
        storyToTell: characterCompleted
      })

  }

  nextChapter(){
    return 
    (this.state.chapterIndex === 3) ? this.setState({ lastChapter: true }) : 
    (this.state.chapterIndex < 4) ? this.setState({ chapterIndex: this.state.chapterIndex + 1 }) :
    this.setState({ chapterIndex: this.state.chapterIndex + 1, lastChapter: false });
    
    // ---- Same code as above ----

    // if (this.state.chapterIndex === 3) {
    //   this.setState({
    //     lastChapter: true
    //   });
    // }

    // if(this.state.chapterIndex < 4){
    //   this.setState({
    //     chapterIndex: this.state.chapterIndex + 1
    //   });

    // } else {
    //   this.setState({
    //     chapterIndex: this.state.chapterIndex + 1,
    //     lastChapter: false
    //   });
    // }
  }

  goBackToGameChoice(){
    const { showProfile } = this.props;
    showProfile();
  }

  render () {
    let nextChapterButton = <button className="next" onClick={this.nextChapter}><span>Nästa</span></button>;
    if(this.state.lastChapter){
        nextChapterButton = <button className="next" onClick={this.goBackToGameChoice}><span>Klar</span></button>;
    }

    let array = Characters.CharcterInfo;
    let characterIndex = this.state.storyToTell;
    let index = this.state.chapterIndex;

    let CharacterStory = array[characterIndex][index].chapter;
    let ChapterTitle = array[characterIndex][index].title;
    let StoryTitle = array[characterIndex][index].storyTitle;

    if (characterIndex === 0){
      StoryTitle = "";
    }
   
    return(

        <div className="chapter col-12 col-sm-8">
          <div className="storyTitle col-8 offset-2">
            <h1>{ChapterTitle}</h1>
            <h2>{StoryTitle}</h2>
          </div>

          <div className="chapterContainer">
            <PerfectScrollbar ref = {(ref) => { this._scrollBarRef = ref; }} className="chapterScroll">
              <p>{CharacterStory}</p>
              {nextChapterButton}
            </PerfectScrollbar>
          </div>
        </div>  
    )
  }
}

export default CharacterBook;