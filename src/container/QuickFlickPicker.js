import React, { Component } from 'react'
import { discoverMovies, searchMovies } from '../helpers/api'
import { 
  Gallery, 
  SearchBar 
} from '../components';
import firebase from '../firebase';

class QuickFlickPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchText: '',
      searched: false
    }
  }

  componentDidMount() {
    discoverMovies()
      .then(data => this.setState({ movies: data }))
  }

  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  handleSearch = () => {
    searchMovies(this.state.searchText)
      .then(data => this.setState({ movies: data}))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(this.state.searchText)
    .then(data => this.setState({ movies: data, searched: true}))
  }

  
  handleAddMovie = (id, title) => {
    const listNames = firebase.database().ref()

    console.log(listNames);

    // const dbRef = firebase.database().ref(`${id}/list`);
    // dbRef.push(title);

  }

  render() {
    const { movies, searched } = this.state

    return (
      <div>
        <SearchBar 
          handleSearchText={this.handleSearchText} 
          handleSearch={this.handleSearch} 
          handleSubmit={this.handleSubmit}
        />
        {this.state.searched && <Gallery 
          movies={movies} 
          handleAddMovie={this.handleAddMovie} />}

      </div>
    )
  }

}

export default QuickFlickPicker