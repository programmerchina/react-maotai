import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Detail from './pages/detail/detail.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Detail></Detail> 
      </div>
    );
  }
}

export default App;
