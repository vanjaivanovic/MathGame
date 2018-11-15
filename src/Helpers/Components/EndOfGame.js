import React, { Component } from 'react';
import Quotes from '../../JSON/quotes.json';

class EndOfGame extends Component {
	 constructor(props) {
    super(props);
     this.state = {
      quotesIndex: this.generateRandomNumber(),
      quotesToShow: ""
	}

    this.callShowProfileFunction = this.callShowProfileFunction.bind(this);
    this.callStartPage = this.callStartPage.bind(this);
  }
  
  callShowProfileFunction(){
    const { showProfile } = this.props;

    showProfile();
  }

  callStartPage(){
  	const { showStartPage } = this.props;

  	showStartPage();
  }

generateRandomNumber(){
   return Math.floor(Math.random() * 17);
 }

	render(){

		let Quote = Quotes.QuoteInfo[this.state.quotesIndex].quote;
    let QuoteAuthor = Quotes.QuoteInfo[this.state.quotesIndex].quoteAuthor;
		return(
			<div className="quotes col-12 col-sm-8">
	          	<div className="quotesContent">
		            <p>Bra spelat! Glöm inte: <br/><br/> "{Quote}"</p>
                <p>{QuoteAuthor}</p>
	            </div>
	    	
	    		<div className="row">
			    	<div className="finalQuestion col-12 offset-sm-2 col-sm-8">
			           <p>Vill du höra mer spännande historier om andra modiga personer?</p>
			       
			            <button className="quoteBtn1" onClick={this.callShowProfileFunction}>Gärna</button>
			            <br/>
			            <button className="quoteBtn" onClick={this.callStartPage}>Jag är klar för idag</button>
		            </div>
	            </div>
			</div>
			)
	}
}


export default EndOfGame;

