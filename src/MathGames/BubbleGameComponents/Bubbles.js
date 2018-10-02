import React, { Component } from 'react';

const BubbleAnswers = props => {
  return (
    <div>
       <button className="bubble x1" onClick={props.Answer}>{props.Result}</button>
       
        <button className="bubble x2" onClick={props.ShakeHint}>{props.WrongAnswer1}</button>
       
      
        <button className="bubble x4" onClick={props.ShakeHint}>{props.WrongAnswer2}</button>
      
        <button className="bubble x5" onClick={props.ShakeHint}>{props.WrongAnswer3}</button>
  
        <button className="bubble x6" onClick={props.ShakeHint}>{props.WrongAnswer4}</button>
          
        <button className="bubble x3" onClick={props.Answer}>{props.Result}</button>
        
        <button className="bubble x7" onClick={props.ShakeHint}>{props.WrongAnswer5}</button>
    </div>
  )
};

export default BubbleAnswers;