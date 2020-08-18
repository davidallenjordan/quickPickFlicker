import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Gallery = (props) => {
  const { movies, handleAddMovie } = props

  return (
    <div className="catalogue">
      {
        movies.map((movie) => {
          return (
            <Fragment>

              <div key={movie.id} className="movie">
                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`Movie poster for ${movie.title}`} />
              </div>
              <button onClick={ () => { handleAddMovie(movie.id, movie.title) }} >Add movie to list</button>

            </Fragment>
          );
        })
      }
    </div>
  );
}

export default Gallery;