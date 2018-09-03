import React, { Component } from 'react';
import './App.css';
import UsersContainer from './containers/UsersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Secret Santa</h1>
        </header>
        <UsersContainer />
      </div>
    );
  }
}

export default App;
