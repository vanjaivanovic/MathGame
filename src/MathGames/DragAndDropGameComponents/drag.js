import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
    
    beginDrag(props) {
        props.drag(props.mathProblem.random, props.mathProblem.id)
    return props.mathProblem;
    },

    endDrag(props, monitor, component) {
        if(!monitor.didDrop()) {
            return;
        }
    } 
}

function collect(connect, monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Drag extends Component {

    render() {
const { isDragging, connectDragSource, mathProblem } = this.props;
const opacity = isDragging ? 0 : 1;
        return connectDragSource( 
            <div className="offset-3 col-sm-2 item" style={{ opacity }}>
                <button className="dragBtn">{mathProblem.random}</button>
            </div>
        );
    }
}

export default DragSource('item', itemSource, collect)(Drag);