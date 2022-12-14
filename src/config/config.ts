// Configuration for TMDB API
// Developer API: https://developers.themoviedb.org/
//I have decided to use TMDB developer api (https://developers.themoviedb.org) instead of the movie json data (movies.ts) you have provided. 
//I did this because the api gives me better way of manipulating the data, and I also have interest in further developing the app to another level.

const API_URL:string = "https://api.themoviedb.org/3/";
const API_KEY:string | undefined = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL:string = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL:string = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// For login and voting: For future use
const REQUEST_TOKEN_URL:string = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL:string = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL:string = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL:string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE:string = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE:string = "w780";

export {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
