import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="App-header">
          
          <h1 className="App-title">VGG APP</h1>
        </header>
        <div className="flex-wrapper">
        <ul className="list">
          <li>foo</li>
          <li>foo</li>
          <li>foo</li>
          <li>foo</li>
        </ul>
        
        <div className="">
        <div className="center">
        <input type="text"  className="mr-10" />
          <button className="button" >foo</button>
        </div>
          
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;
