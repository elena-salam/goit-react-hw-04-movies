import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './Layout';
import Loader from './Loader';
import routes from '../routes';

const Home = lazy(() => import('../views/HomePage'));
const Movie = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));


const App = () =>(
    <Layout>
        <Suspense fallback={<Loader />}>
        <Switch>
            <Route path={routes.home} exact component={Home}/>
            <Route path={routes.movies} exact component={Movie}/>
            <Route path={routes.movie} component={MovieDetailsPage}/>
        </Switch>
        </Suspense>
    
    
    

   
    </Layout>
)

export default App;