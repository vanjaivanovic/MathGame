import React, { Component } from 'react';
import CharacterInfoJson from '../JSON/info.json';

class CharacterList extends Component {
  constructor(props){
    super(props);
     this.state = {
       CharacterCompletedIndex: ""
     }


    this.storyCompleted = this.storyCompleted.bind(this);
  }

  componentWillMount(){
     this.setState({
       Character: CharacterInfoJson,
      })

    let array = [];
    let characterID = CharacterInfoJson.id;

    CharacterInfoJson.map((CharacterDetail, index) => {
        let characterID = CharacterDetail.id;
        array.push(characterID);
    })

    localStorage.getItem('storyCompleted');
    let storyCompleted = JSON.parse( localStorage.getItem('storyCompleted') );
    
    let characterCompletedIndexArray = array;

        characterCompletedIndexArray.map((characterID, index) => {

          let characterCompletedIndex = Number(characterID);

          if (!storyCompleted) {
            console.log('no books');

          } else if(storyCompleted){

              let characterCompleted = "";
              storyCompleted.map((completedBook, index) => {
              characterCompleted = completedBook.character; 

                  if(characterCompletedIndex === characterCompleted){
          
              let CharactersArray = CharacterInfoJson;
              CharactersArray[characterCompleted].completed = true;
         //uptadera array som loopas igenom i render
          }
        });
      }
    });
  }


  storyCompleted(index, CharacterDetail){


    localStorage.getItem('storyCompleted');
    let storyCompleted = JSON.parse( localStorage.getItem('storyCompleted') );
    
    if (!storyCompleted || (storyCompleted && !storyCompleted[index] )){
      console.log('no book');
      
    } else if(index === storyCompleted[index].character && storyCompleted[index].chaptersCompleted === 4){
        let playAudio = new Audio();
        playAudio.src = require('../Audio/book.mp3');
        playAudio.play();
        console.log('get book');
        let characterBook = true;
        let characterCompleted = storyCompleted[index].character;

         const { showCharacterBook } = this.props;
      showCharacterBook(characterBook, characterCompleted);   
    } 
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
                    <div className="characterNameBox"><p className="characterNames" onClick={() => CharacterWasClicked(this.state.Character, index)}>{CharacterDetail.name}</p> 
                    <i className={CharacterDetail.completed ? 'fas fa-book fa-3x fa-bookCompleted' : 'fas fa-book fa-3x' } onClick={() => this.storyCompleted(index, CharacterDetail)}></i></div>    
                </div>
              </li>
          )
        })}
      </div>
    )   
  }
        
}


export default CharacterList;