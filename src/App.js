import React, { Component } from 'react';
import './App.css';

const Intro = (props) => (
  <p className="App-intro">
    Our first functional component.
  </p>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title"> TV Series List</h1>
        </header>
      </div>
    );
  }
}

export default App;
