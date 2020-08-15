import React, { Component } from 'react';
import firebase from './firebase';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      userMovieList: []
    }
  }

  //attaches firebase to the app
  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      const newState = [];
      this.setState({
        userMovieList: newState
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pick Flick</h1>
        <MovieDetails />
      </div>
    );
  }
}

export default App;
