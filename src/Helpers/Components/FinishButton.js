import React, { Component } from 'react';

class FinishButton extends Component {
  constructor(props) {
    super(props);

    this.callpopUp = this.callpopUp.bind(this);
  }
  

callpopUp(){
  const { popUp } = this.props;

  popUp();
}

  render(){
    return(
        <button className="start offset-8 col-2" onClick={this.callpopUp}><span>Avsluta spelet</span></button>
      )
  }
}

export default FinishButton;

 