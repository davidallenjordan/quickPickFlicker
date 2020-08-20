import React, { Component } from 'react'
import Routes from './Routes'
import { Header, Footer } from './components'

// Parent Component that connects Header, Footer and Routes

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;