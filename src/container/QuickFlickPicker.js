import React, { Component } from 'react'
import { discoverMovies, searchMovies } from '../helpers/api'
import { Gallery, SearchBar } from '../components';
import UserList from '../container/UserList';

// This is the main App Component, holds event listeners and state, Sends state as props to various children Components

class QuickFlickPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [],
      searchText: '',
      searched: false,
      galleryData: []
    }
  }

  // Gets a default list of movies after Component is loaded
  componentDidMount() {
    discoverMovies()
      .then(data => this.setState({ movies: data }))
  }

  // Sets State with the user's search query text
  handleSearchText = (e) => {
    this.setState({ searchText: e.target.value })
  }

  // Saves the user's query in state
  handleSearch = () => {
    searchMovies(this.state.searchText)
      .then(data => this.setState({ movies: data}))
  }

  // Runs a search with the user's query passed down through state
  handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(this.state.searchText)
    .then(data => this.setState({ movies: data, searched: true}))
  }

  // Moves the list data toward Gallery Component
  movieData = (dataFromUserList) => {
    this.setState({
      galleryData: dataFromUserList
    })
  }

  render() {
    const { movies, galleryData } = this.state

    return (
      <div>

        <UserList galleryInfo={this.movieData}/>
        <SearchBar 
          handleSearchText={this.handleSearchText} 
          handleSearch={this.handleSearch} 
          handleSubmit={this.handleSubmit}
        />
        <Gallery 
          movies={movies} 
          movieData={galleryData}
          userQuery={this.state.searchText}
        />

      </div>
    )
  }

}

export default QuickFlickPicker