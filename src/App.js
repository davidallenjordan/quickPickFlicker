import React, { Component } from 'react'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>quickFlickPicker</h1>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;