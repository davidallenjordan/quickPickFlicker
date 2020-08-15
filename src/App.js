import React, { Component } from 'react';
import firebase from './firebase';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      userMovieList: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (snapshot) => {
      const newState = [];
      const data = snapshot.val();
      console.log(data);

      this.setState({
        userMovieList: newState
      })
    })

    // API Call
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie/',
      params: {
        api_key: '2e86861dd566ea2f61741d264de6590a',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
      }
    })
    .then( (res) => {
      console.log(res)

      this.setState({
        movies: res.data.results
      })

    })



  }



  render() {
    return (
      <div>
        <h1>Pick Flick</h1>
      </div>
    );
  }
}

export default App;
