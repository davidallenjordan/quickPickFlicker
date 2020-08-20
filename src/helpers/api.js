import axios from 'axios'

// Holds all the API calls and exports them

// Initial displayed movies call
export const discoverMovies = () => {
  return axios({
    url: `https://api.themoviedb.org/3/discover/movie`,
    params: {
      api_key: 'f012df5d63927931e82fe659a8aaa3ac',
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page: 1,
    },
  }).then((res) => {
    res = res.data.results;
    return res
  })
}

// Searched movies call
export const searchMovies = (movieName) => {
  return axios({
    url: `https://api.themoviedb.org/3/search/movie`,
    params: {
      api_key: 'f012df5d63927931e82fe659a8aaa3ac',
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page: 1,
      query: movieName
    },
  }).then((res) => {
    res = res.data.results;
    return res
  })
}

// Gets movie details
export const searchMovieDetails = (movieID) => {
  return axios({
    url: `https://api.themoviedb.org/3/movie/${movieID}`,
    params: {
      api_key: 'f012df5d63927931e82fe659a8aaa3ac',
      language: 'en-US',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page: '1'
    },
  }).then( (res) => {
    return res.data
  })
}



