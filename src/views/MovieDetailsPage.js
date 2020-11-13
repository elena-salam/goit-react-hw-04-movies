import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import tmdbAPI from '../services/tmdb-api';
import Cast from '../components/Cast'
import Review from '../components/Review';
import styled from 'styled-components';
import PropTypes from 'prop-types';



const FilmInfo = styled.div`
display: flex;
justify-content: space-between;
`
const FilmOverview = styled.div`
display: block;
margin-left: 30px;
`
const FilmTitle = styled.h1`
display: flex;
justify-content: center;
margin-top: 0;
`
const GenreBox = styled.ul`
margin-top: 10px;
padding-left: 0;
`
const GenreList = styled.ul`
padding-left: 0;
`
const GenreItem = styled.li`
list-style: none;
`

export default class MovieDetailsPage extends Component{
    static proptTypes = {
        location: PropTypes.object,
      }

    state = {
        movie: null,
        error: false,
    }
   
    componentDidMount(){
        tmdbAPI.fetchFilmById(this.props.match.params.movieId)
        .then(movie => this.setState({movie}))
        .catch(()=> this.setState({error:true}));
        
    }

    handleGoBack = () => {
        const {state} = this.props.location
        // Плюшки (UE): нажимая на кнопку GoBack возвращаемся на список всех "котиков"
        if(state && state.from){
            return this.props.history.push(state.from)
        }
        // Плюшки (UE): если мы скопировали url с понравившимся фильмом на новую вкладку, 
        // то при нажатии кнопки GoBack вернется страница с поиском.
        this.props.history.push('/')

    }
    
    render(){
        // const isLocationStateEmpty = this.props.location.state===undefined? true : false;
        const {movie} = this.state;
        const {match} = this.props;
    
        return(
            <div>
               
                <button type='button' onClick={this.handleGoBack}>Go Back to the FilmsList</button>
            {movie &&(
                <FilmInfo>
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                    <FilmOverview>
                        <FilmTitle>{movie.title}</FilmTitle>
                        <h3>User score: {`${movie.vote_average*10}`}%</h3>
                        <h3>Overview</h3>
                        <p> {movie.overview}</p>
                        <h3>Genres </h3>
                        <GenreBox>{movie.genres.map(genre=>(
                            <GenreList key={genre.id}>
                                <GenreItem>{genre.name}</GenreItem>
                            </GenreList>
                        ))}</GenreBox>
                    </FilmOverview>
                </FilmInfo>
            )}
            <hr/>
            <p>Additional information</p>
            
            <Link to={{
                pathname: `${match.url}/casts`,
                // state: !isLocationStateEmpty? {from: this.props.location.state.from} : null,
            }}>Cast</Link>
            <br/> 
            <Link to={{
                pathname: `${match.url}/reviews`,
                // state: !isLocationStateEmpty? {from: this.props.location.state.from} : null,
            }}>Review</Link>

            <Route path={`${match.url}/casts`} 
            render={props => <Cast {...props} movieId={match.params.movieId} />}/>
            
            <Route path={`${match.url}/reviews`}
            render={props => <Review {...props}  movieId={match.params.movieId}  />}/>
            {/*т.к. ссылки ведут на оду и ту же страницу, то надо указывать проп "render" */}
            <hr/>
            
            </div>
        );
    }
}


