import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import tmdbAPI from '../services/tmdb-api';
import PropTypes from 'prop-types';

export default class Movies extends Component{
    static proptTypes = {
        location: PropTypes.object,
      }

      
    state = {
        movies: []
    }

    componentDidMount(){
        tmdbAPI.fetchMostPopularFilms()
        .then(movies =>this.setState({movies}))
       
    }


    render(){
        const {movies} = this.state;
        return(
            <>
            <h1>Trending Today</h1>
            {movies.length>0 &&(
                <ul>
                    {movies.map(movie =>(
                        <li key={movie.id}>
                            <Link to={{
                                pathname:`movies/${movie.id}`,
                                state: {from: this.props.location}
                                }}
                                >
                                    {movie.name || movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            
            </>
        );
    }
}

