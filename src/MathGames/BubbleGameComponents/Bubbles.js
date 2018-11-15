import React, { Component } from 'react';

class BubbleAnswers extends Component {
  constructor(props){
   super(props);
 }

render(){
  const { Answer, ShakeHint, ResultOne, ResultTwo, WrongAnswer1, WrongAnswer2, WrongAnswer3, WrongAnswer4, WrongAnswer5, 
    BubbleOneCorrect, BubbleTwoCorrect, BubbleWrongOne, BubbleWrongTwo, BubbleWrongThree, BubbleWrongFour, BubbleWrongFive }
   = this.props;
  

  return (
      <div>
         <button id={BubbleWrongOne} className="x1" onClick={() => ShakeHint(1)}>{WrongAnswer2}</button>
         
          <button id={BubbleWrongTwo} className="x2" onClick={() => ShakeHint(2)}>{WrongAnswer1}</button>

          <button id={BubbleOneCorrect} className="x3" onClick={() => Answer(1)}>{ResultOne}</button>

          <button id={BubbleWrongThree} className="x4" onClick={() => ShakeHint(3)}>{WrongAnswer5}</button>
        
          <button id={BubbleTwoCorrect} className="x7" onClick={() => Answer(2)}>{ResultTwo}</button>
    
          <button id={BubbleWrongFour} className="x6" onClick={() => ShakeHint(4)}>{WrongAnswer4}</button>

          <button id={BubbleWrongFive} className="x5" onClick={() => ShakeHint(5)}>{WrongAnswer3}</button>
          

      </div>
    )

}
  
};

export default BubbleAnswers;