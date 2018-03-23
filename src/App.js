import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'Ayo', names: []}
  }

  change(event) {
    event.persist();
    this.setState({name: event.target.value});
  }

  click(event) {
    if (this.state.name === '') {
      return;
    }

    event.persist();
    this.setState({names: [...this.state.names, this.state.name]}, ()=>this.setState({name: ''}));
  }

  render() {
    return (
      <div className="wrapper">
        <header className="App-header">
          
          <h1 className="App-title">VGG APP</h1>
        </header>
        <div className="flex-wrapper">
        <ul className="list">
          {
            this.state.names.map(item => <li>{item}</li>)
          }
        </ul>
        
        <div className="">
        <div className="center">
        <input type="text"  className="mr-10" value={this.state.name} onChange={this.change.bind(this)}/>
          <button className="button" onClick={this.click.bind(this)}>foo</button>
        </div>
          
        </div>
        
        </div>
      </div>
    );
  }
}

export default App;
