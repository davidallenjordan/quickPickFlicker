import React, { Component } from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import Footer from './components/Footer';
import axios from 'axios';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faTrashAlt)

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      userList: [],
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
        <Header />

        <UserList 
          getUserList={this.userList} 
          moviesList={this.movies}
        
        />

        
        <Footer />
      </div>
    );
  }
}

export default App;
