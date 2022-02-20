import { supplyMovieAPIKey } from "../utils/supplyMovieAPIKey";

const endpoints = {
  getMovieList: `https://api.themoviedb.org/3/movie/popular?api_key=${supplyMovieAPIKey()}&language=ko-KR`,
};

export default endpoints;
