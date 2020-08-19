import React, { Fragment, Component } from 'react';
import firebase from '../firebase';

// import QuickFlickPicker from '../container/QuickFlickPicker';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieListToPush: []
    }
  }

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

    
    
    
    

    
    // open firebase connection, find movielist based on movielistid
    // push to the array ... ? 
    
  }
  
  render() {
    
    const { movies, movieData } = this.props
    console.log(movies)
    // getVideoDetails()
    
    return (
      <div className="catalogue">
    {
      movies.map((movie) => {
        console.log(movie)
        return (
          <Fragment>
          
          <div key={movie.id} className="movie">
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`Movie poster for ${movie.title}`} />
            <p>{`${movie.title}`}</p>
            <p>{`title${movie.director}`}</p>
            <p>{`${movie.cast}`}</p>
            <p>{`${movie.genre}`}</p>
            {/* <a href={movie.} >trailer with youtube url</a> */}
          </div>

              
              <ul>
                {
                  movieData.map((movieList) => {
                    return (
                      <li><button onClick={() => {
                        this.handleAddMovie(movieList.key, movie.title)
                      }} >{`Add movie to ${movieList.info.name} list`}</button></li>
                    )

                  })

                }

              </ul>


            </Fragment>
          );
        })
      }
    </div>
  );
  }
}

export default Gallery;