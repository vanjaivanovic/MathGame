import React, { Component } from 'react';

const AnswerBox = props => { 
  return(
    <span id={props.answerBoxID}>{props.Result}</span>
    )
}

export default AnswerBox;