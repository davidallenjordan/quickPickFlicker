import React, { Component } from 'react';
import axios from 'axios';

class GetMovieDetails extends Component {

  componentDidMount() {
    if (typeof this.props.movieID != "undefined") {
      axios({
        url: `https://api.themoviedb.org/3/movie/${this.props.movieID}`,
        params: {
          api_key: 'f012df5d63927931e82fe659a8aaa3ac',
          language: 'en-US',
          sort_by: 'popularity.desc',
          include_adult: 'false',
          include_video: 'false',
          page: '1'
        }
      }).then(res => {

        const movie = res.data;
        this.props.movieDetails(movie);
      }).catch(() => {
        alert('Sorry, we\'re having trouble connecting to the server. Please try again');
      });
    }
  }

}

export default GetMovieDetails;