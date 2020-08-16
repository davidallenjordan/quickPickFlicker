import React, { Component } from 'react';
import UserList from './components/UserList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      userList: []
    }
  }

  
  componentDidMount() {
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

      this.setState({
        movies: res.data.results
      })

    })
  }

  getUserList = (event, userMovieList) => {
    console.log(userMovieList);

    this.setState({
      userList: userMovieList
    })
  }

  render() {
    return (
      <div>
        <h1>Pick Flick</h1>

        <UserList getUserList={this.userList}/>
      </div>
    );
  }
}

export default App;
