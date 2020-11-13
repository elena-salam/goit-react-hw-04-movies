import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import tmdbAPI from '../services/tmdb-api';
import getQueryParams from '../utils/get-query-params';
import Loader from '../components/Loader'

export default class MoviesPage extends Component {
    state = {
        movies: [],
        isLoading: false,
    }
    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);
        this.setState({ isLoading: true });
    
        if (query) {
            tmdbAPI
            .fetchFilmWithQuery(query)
            .then(data =>this.setState({movies:data, isLoading: false}));
            return
        
        }
        
        // можно сразу предложить список фильмов, например, с ключевым словом "batman"
        // tmdbAPI
        //     .fetchFilmWithQuery('batman')
        //     .then(movies =>this.setState({movies}));
        
    //     tmdbAPI.fetchMostPopularFilms('day')
    //     .then(data => this.setState({ movies: data, 
    //         // isLoading: false 
    //     }))
    }

//    сравниваем предыдущие и текущие строки поиска
    componentDidUpdate(prevProps, prevState){
    // эта функция возвращает объект, но мы диструкторизировали переменную и 
    // получаем только введенное пользователем значение. 
    // диструктуризация "именная", присваиваем новое имя для "key", т.к. "key" одинаковый у обеих const
        const {query: prevQuery} = getQueryParams(prevProps.location.search)
        const {query: nextQuery} = getQueryParams(this.props.location.search);
       
        
        
        if(prevQuery !==nextQuery){
            this.setState({isLoading: true})
            tmdbAPI
            .fetchFilmWithQuery(nextQuery)
            .then(data =>this.setState({movies:data, isLoading: false}));
            
        }
     }

    handleChangeQuery = query =>{
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
        })
        
    }

    render(){
        const {movies, isLoading} = this.state;
        const{match} = this.props;

        return(
           <>
            <SearchBox onSubmit={this.handleChangeQuery}/>
            {movies.length>0 &&(
                <ul>
                    {movies.map(movie =>(
                        <li key={movie.id}>
                            <Link to={{
                                pathname:`${match.url}/${movie.id}`,
                                state: {from: this.props.location}
                                }}
                                >
                                    {movie.name || movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {isLoading && <Loader/>}
           
           </>
        )
    }
    
    
}
