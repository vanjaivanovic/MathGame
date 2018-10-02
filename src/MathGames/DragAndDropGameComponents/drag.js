import React, { Component } from 'react';


class Drag extends Component {
     allowDrop(ev) {
    ev.preventDefault();
}

 drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

 drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
    render() {
        return ( 
            <div>
            <div className="col-sm-3" id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
            
            <button className="col-sm-3" id="drag1" draggable="true" onDragStart={this.drag} width="50" height="50">3</button>
            
            </div>
        );
    }
}

export default Drag;

