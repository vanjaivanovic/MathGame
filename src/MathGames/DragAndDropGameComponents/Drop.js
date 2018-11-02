import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'; 

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),

  }
}

class Drop extends Component {

  render(){
    const { connectDropTarget, hovered, mathProblem } = this.props;
    const backgroundColor = hovered ? 'lightgreen' : 'white';
    return connectDropTarget(
      <div className="col-sm-6 dropArea">
      <div className="row">
        <p className="offset-sm-1 col-sm-6"> {mathProblem.a} {mathProblem.operator} {mathProblem.b} = </p> 
        <div className="col-sm-3 dropBox" style={{ background: backgroundColor}}>{mathProblem.result}</div> 
        </div>
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Drop);