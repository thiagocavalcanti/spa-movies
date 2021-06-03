import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_APIKEY;
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseURL('movie/popular'));
  }
  static getMovieById(id) {
    return axios(withBaseURL(`movie/${id}`));
  }
}
