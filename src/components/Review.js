import React, {Component} from 'react'
import tmdbApi from '../services/tmdb-api';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArticleItem = styled.li`
list-style:none;
`


export default class Review extends Component{
    static propTypes = {
        movieId: PropTypes.string,
      }
    state={
        articles: null,
    }

    componentDidMount(){
        tmdbApi.fetchReviews(this.props.movieId)
        .then(articles => this.setState({articles}))
        .catch(()=> this.setState({error:true}));
    }

    render(){
        const {articles} = this.state;
        console.log(this.state.articles)
        
        return(
            <>
            {articles ?(
                    <ul>
                    {articles.map(article=>
                        <ArticleItem key={article.id}>
                            <p>{article.content}</p>
                            <h3>author: {article.author}</h3>

                        </ArticleItem>)}
                
                </ul>
                
                ) : (
                    <h3>No reviews</h3>
                )
            }
            
            </>
        )
    }
}
