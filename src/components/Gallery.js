import React from 'react';


const Gallery = (props) => {
  return (
    <div className="movieResults">
      <ul>
      {
        props.movieInfo.map((movie) => {
          console.log(movie);
          return (
            <li>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Poster for ${movie.title}.`} />
            </li>
          )
        })

      }
      </ul>
    </div>
  );
};
export default Gallery;