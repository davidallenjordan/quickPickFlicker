import React, { Component } from 'react';
import axios from 'axios';

class MovieDetails extends Component {
    constructor() {
        super();
        this.state = {
            movie: ''
        }
    }

    componentDidMount() {
        axios({
            url: `https://api.themoviedb.org/3/discover/movie/`,
            method: `GET`,
            dataType: `JSON`,
            params: {
                api_key: '2e86861dd566ea2f61741d264de6590a',
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                page: '1'
            }
        })
            .then((res) => {
                console.log(res.data);
                this.setState({
                    movie: res.data.results[0]
                })
            })
    }

    render() {
        const { original_title, tagline, overview, poster_path } = this.state.movie;
        return (
            <div className="poster" >
                <div className="description">
                    <h1>{original_title}</h1>
                    <h2>{tagline}</h2>
                    <p>{overview}</p>
                </div>
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={`Movie poster for ${original_title}`} />
                </div>
            </div>
        )
    }
}
export default MovieDetails;