import React, { Component } from 'react';

const ChooseOperator = props => {

  return(
    <div className="operatorsWrapper col-12 col-sm-5 offset-sm-1">
      <div className="row">
      	<button className="plus operatorButton col-12 col-sm-12" onClick={props.event}><i className="fas fa-plus"></i></button>
      </div>
      <div className="row">
      	<button className="minus  operatorButton col-12" onClick={props.event}><i className="fas fa-minus"></i></button>
      </div>
      <div className="row">
      	<button className="multiplication operatorButton col-12" onClick={props.event}><i className="fas fa-times"></i></button>
      </div>
    </div>
  )
}

export default ChooseOperator;