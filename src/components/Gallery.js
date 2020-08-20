import React, { Component } from 'react';
import firebase from '../firebase';

// Maps out user's search query and displays movie results and buttons to add movies to lists
// Gets props from QuickFlickPicker.js

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieListToPush: [],
      usersQuery: ''
    }
  }

  // Adds movie selection to firebase and updates state
  handleAddMovie = (movieListId, movieName) => {
    const dbRef = firebase.database().ref();
    
    dbRef.on('value', (snapshot) => {
      
      let listNames = [];
      
      const data = snapshot.val();

      for (let key in data) {
        if (key === movieListId) {
          listNames = [...data[key].list]
          
        }
      }

      listNames.push(movieName)

      this.setState({
        movieListToPush: listNames
      })
      
    })

    const dbRefToMovieList = firebase.database().ref(`${movieListId}/list`);   
    dbRefToMovieList.update(this.state.movieListToPush);

  }
  

  render() {
    
    const { movies, movieData } = this.props
    
    return (
      <div className="catalogue wrapper">
        {
          movies.map((movie) => {
          return (
            <div key={`frag-${movie.id}`}>

              <div className="movie">
                <p className="movieTitles">{`${movie.title}`}</p>
                <img 
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`Movie poster for ${movie.title}`} 
                />
              </div>

              <div className="buttonContainer">

                {
                  movieData.map((movieList) => {
                    return (
                      <button className="addMovieButton" onClick={() => {
                        this.handleAddMovie(movieList.key, movie.title)
                      }} >{`Add movie to ${movieList.info.name} list`}</button>
                    )

                  })
                }

              </div>

            </div>
            );
          })
        }
      </div>
    );
  }
  
}

export default Gallery;