import Movie from "../../types/Movie";
import movieList from "../atoms/movieList";
import { atom } from "recoil";

const filteredMovieList = atom<Movie | Movie[]>({
  key: "filteredMovieList",
  default: movieList,
});

export default filteredMovieList;
