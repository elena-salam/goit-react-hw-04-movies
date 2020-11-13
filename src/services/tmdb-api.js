const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=2223db1c63504d714b3bbdc646456ae1';

const fetchMostPopularFilms =()=>{
    return fetch(baseUrl + 'trending/movie/day?' + apiKey)
        .then(res => res.json())
        .then(data=>data.results)

};

const fetchFilmById = movieId =>{
    return fetch (`${baseUrl}movie/${movieId}?${apiKey}&language=en-US`)
    .then(res=>res.json())
//   .then(res=>{
//       console.log(res)
//   })
    
};

const fetchFilmWithQuery = name =>{
    
    return fetch (`${baseUrl}search/movie?${apiKey}&query=${name}`)
    .then(res => res.json())
    .then(data=>data.results)

};

const fetchCasts = movieId =>{
    return fetch (`${baseUrl}movie/${movieId}/credits?${apiKey}`)
    .then (res=>res.json())
    .then (data=>data.cast)
};

const fetchReviews = movieId =>{
    return fetch(`${baseUrl}movie/${movieId}/reviews?${apiKey}&language=en-US&page=1`)
    .then (res => res.json())
    .then (data => data.results)
}

export default {fetchMostPopularFilms, fetchFilmById, fetchFilmWithQuery, fetchCasts, fetchReviews};



