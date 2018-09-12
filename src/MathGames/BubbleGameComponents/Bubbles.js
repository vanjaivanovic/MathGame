import React, { Component } from 'react';

const BubbleAnswers = props => {
  return (
    <div>
       <div className="stage">
        <button className="ball" onClick={props.Answer}>{props.Result}</button>
       </div>
       <div className="stage">
        <button className="ball">{props.WrongAnswer1}</button>
       </div>
       <div className="stage">
        <button className="ball">{props.WrongAnswer2}</button>
       </div>
       <div className="stage">
        <button className="ball">{props.WrongAnswer3}</button>
       </div>
       <div className="stage">
        <button className="ball">{props.WrongAnswer4}</button>
       </div>
  </div>
  )
};

export default BubbleAnswers;