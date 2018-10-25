import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const itemSource = {
    beginDrag(props) {
    return props.mathProblem;
    },

    endDrag(props, monitor, component) {
        
        if(!monitor.didDrop()) {
            return;
        } 

        return props.handleDrop(props.mathProblem.id);
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
const { isDragging, connectDragSource, mathProblem} = this.props;

        return connectDragSource( 
            <div className="offset-sm-2 col-sm-2 item">
                <button className="dragBtn">{mathProblem.random}</button>
            </div>
        );
    }
}

export default DragSource('item', itemSource, collect)(Drag);

