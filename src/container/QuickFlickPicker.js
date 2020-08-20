import React, { Component } from 'react'
import { discoverMovies, searchMovies } from '../helpers/api'
import { Gallery, SearchBar } from '../components';
import UserList from '../container/UserList';

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


  // Callback func with parameter represented data we will recieve
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