import React, { Component } from 'react';
import Hints from '../../JSON/Hint.json';

class Hint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintIndex: 0,
      hintToShow: ""

    }
  }

   componentWillMount(){
    const { hint } = this.props;

    const { hintToShow } = this.props;

      this.setState({
        hintIndex: hint,
        hintToShow: hintToShow
      })

  }

  render(){

    let index = 0;
    let operatorHintIndex = 0;

    let array = Hints.HintInfo;
    let HintContent = array[operatorHintIndex][index].hint;

    return(
      <div className="hint col-12 col-sm-8">
            <h1>{HintContent}</h1>
      </div>

      )
  }
}

export default Hint;