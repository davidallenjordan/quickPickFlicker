import React from 'react';
import firebase from '../firebase';
import MovieDetails from '../container/MovieDetails';
import { searchMovieDetails } from '../helpers/api';

class AddToList extends Component {
  constructor() {
    super();
    this.state = {
      userLists:[]
    }
  }

  // Populates component state with firebase lists
  componentDidMount() {
    const { match } = this.props;
    searchMovieDetails(match.params.movieID) 


    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const databaseData = snapshot.val();
      const stateToSet = [];

      for (let key in databaseData) {
        const listInfo = {
          key: key
        }

        stateToSet.push(listInfo);
      }

      this.setState({
        userLists: stateToSet
      })

    })
    // End of ComponentDidMount
  }

  // Prevents button from reloading (not sure if this is relevant, try and remove later)
  handleReload = (event) => {
    event.preventDefault();
  }

  // Checks if movie is already in list
  checkMovieInList = (listName, movieId) => {
    const stateToSet = [];
    const dbRef = firebase.database().ref(listName);

    dbRef.on('value', (snapshot) => {
      const databaseData = snapshot.val();

      for (let key in databaseData) {
        if (databaseData[key] === listName) {
          continue;
        }
        stateToSet.push(databaseData[key].id);
      }
    });
    if (stateToSet.indexOf(movieId) > -1) {
      return true;
    }
    return false;

    // End of CheckMovieInList
  }

  // Adds movie to the list
  handleClick = (event, listName) => {
    event.preventDefault();
    const dbRef = firebase.database().ref(listName);
    const movieInfo = this.state.movieDetails;

    if (this.checkMovieInList(listName, movieInfo.id)) {
      alert('You\'ve already added this to the list');
    } else {
      const genres = movieInfo.genres.map((genre) => {
        return genre.name
      })

      const details = {
        id:movieInfo.id,
        title: movieInfo.title,
        runtime: movieInfo.runtime,
        genre: genres
      }

      dbRef.push(details);
    }

    // End of handleClick
  }

  // Get movie details from MovieDetails component
  movieDetails = (movieInfo) => {
    this.setState({
      movieDetails: movieInfo
    })
  }

  render() {
    const userLists = this.state.userLists;
    return (
      <div className="addMovies">
        <div className="listItems">
          <a href="/" onClick={this.handleReload} className="plusButton">+</a>
          <ul>
            {userLists.map((list, index) => {
              return (
                <li key={index} onClick={(event) => { this.handleClick(event, list.key) }}>
                  <MovieDetails movieId={this.props.movieId}
                  movieInfo={this.MovieDetails} />
                  <a href="/">{list.key}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default AddToList;