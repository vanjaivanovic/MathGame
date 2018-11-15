import React, { Component } from 'react';

class JumpRopeInput extends Component {
  constructor(props){
    super(props);
  }
  
render(){

  const { value, placeholder, onChange, jumpRopeAnswerButton, AnswerIcon, handleSubmit } = this.props;
	return(
		<div>
      <form onSubmit={handleSubmit}>
         <div className="row">
  		     <label>
            <input className="inputone" value={value} placeholder={placeholder} type="number" onChange={onChange} />
           </label>
          
          <button className={jumpRopeAnswerButton} type="submit">{AnswerIcon}</button>
         </div>
      </form>
     </div>
	)}
}

export default JumpRopeInput;