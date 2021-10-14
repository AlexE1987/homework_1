import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
