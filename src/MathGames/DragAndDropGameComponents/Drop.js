import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'; 


const droppedItemSource = {
    canDrop(props) {
    return props.handleDrop(props.mathProblem.result, props.mathProblem.id);
    }
 }
function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Drop extends Component {
  render(){
    const { connectDropTarget, hovered, item, drop, mathProblem, showCorrectAnswer } = this.props;
    const backgroundColor = hovered ? 'rgba(252, 74, 216, 1)' : 'yellow';
    
    return connectDropTarget(
      <div className="col-sm-6 dropArea">
      <div className="row">
        <p className="offset-sm-1 col-sm-7"> {mathProblem.a} <span className="operatorStyleDrop">{mathProblem.operator}</span> {mathProblem.b} <span className="operatorEqualeDrop">=</span> </p> 
        <div id={mathProblem.correctAnswerStyle} className="col-sm-3 dropBox" style={{ background: backgroundColor }}>{mathProblem.result}</div> 
        </div>
      </div>
    )
  }
}

export default DropTarget('item', droppedItemSource , collect)(Drop);