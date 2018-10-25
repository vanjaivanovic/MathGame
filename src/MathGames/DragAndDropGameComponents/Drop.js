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
      <div className="col-sm-8">
        <p> {mathProblem.a} {mathProblem.operator} {mathProblem.b} = 
        <span className="dropBox" style={{ background: backgroundColor}}>{mathProblem.result}</span>
        </p>    
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Drop);