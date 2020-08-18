import React, { Component } from 'react'
import Routes from './Routes'
import { Header, Footer } from './components'

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