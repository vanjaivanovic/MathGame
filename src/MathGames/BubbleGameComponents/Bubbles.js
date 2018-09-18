import React, { Component } from 'react';

const BubbleAnswers = props => {
  return (
    <div>
       <button className="bubble x1" onClick={props.Answer}>{props.Result}</button>
       
        <button className="bubble x2">{props.WrongAnswer1}</button>
       
      
        <button className="bubble x4">{props.WrongAnswer2}</button>
      
        <button className="bubble x5">{props.WrongAnswer3}</button>
  
        <button className="bubble x6">{props.WrongAnswer4}</button>
          
        <button className="bubble x3" onClick={props.Answer}>{props.Result}</button>
        
        <button className="bubble x7">{props.WrongAnswer5}</button>
  </div>
  )
};

export default BubbleAnswers;