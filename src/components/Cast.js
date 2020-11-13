import React, {Component} from 'react'
import tmdbApi from '../services/tmdb-api';
import CastListItem from './CastListItem';
import CastList from './CastList';
import Loader from './Loader';
import PropTypes from 'prop-types';


export default class Cast extends Component{

  static propTypes = {
    movieId: PropTypes.string,
  }
    state={
        actors: null
    }

    componentDidMount(){
        tmdbApi.fetchCasts(this.props.movieId)
        .then( actors=> this.setState({actors}))
        // .catch(()=>this.setState({error:true}))
        
        
    }

    render() {
        const { actors } = this.state;
        return (
          <section>
            <CastList>
              {actors ? (
                actors.length !== 0 ? (
                  actors.map(actor => (
                    <CastListItem
                      key={actor.credit_id}
                      actorImage={actor.profile_path}
                      actorName={actor.name}
                      characterName={actor.character}
                    />
                  ))
                ) : (
                  <h2>Actors not found.</h2>
                )
              ) : (
                <section
                  style={{
                    position: 'relative',
                    margin: '0 auto',
                  }}
                >
                  <Loader />
                </section>
              )}
            </CastList>
          </section>
        );
      }
    }      