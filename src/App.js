import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Games from './GameChoice/Games.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
 render() {

   return (
     <div className="container">
      <Games />
     </div>
   );
 }
}


export default App;
