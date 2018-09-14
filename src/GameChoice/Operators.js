import React, { Component } from 'react';

const ChooseOperator = props => {

  return(
    <div className="operatorsWrapper col-xs-12 col-sm-6">
      <div className="row">
      	<button className="operatorButton col-xs-12" onClick={props.event}>+</button>
      </div>
      <div className="row">
      	<button className="operatorButton col-xs-12" onClick={props.event}>-</button>
      </div>
      <div className="row">
      	<button className="operatorButton col-xs-12" onClick={props.event}>x</button>
      </div>
    </div>
  )
}

export default ChooseOperator;