import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Заполните анкету',
    };
  }

  renameHeaderTitle = (name, lastName) => {
    let newHeaderTitle = `${name} ${lastName}`;
    this.setState(() => ({
      headerTitle: newHeaderTitle,
    }));
  };

  render() {
    return (
      <div className="App">
        <Header
          headerTitle={this.state.headerTitle}
          headerTitleChanged={this.state.headerTitleChanged}
        />
        <Main renameHeaderTitle={this.renameHeaderTitle} />
      </div>
    );
  }
}

export default App;
