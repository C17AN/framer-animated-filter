import movieListAtom from "../recoil/atoms/movieList";
import Movie from "../types/Movie";
import { SetterOrUpdater, useRecoilState } from "recoil";

const useMovieList = (): [
  movieList: Movie | Movie[],
  setMovieList: SetterOrUpdater<Movie | Movie[]>
] => {
  const [movieList, setMovieList] = useRecoilState<Movie | Movie[]>(movieListAtom);
  return [movieList, setMovieList];
};

export default useMovieList;
