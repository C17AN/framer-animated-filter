import filteredMovieListSelector from "../recoil/selectors/filteredMovieList";
import Movie from "../types/Movie";
import { SetterOrUpdater, useRecoilState } from "recoil";

const useFilteredMovieList = (): [
  filteredMovieList: Movie | Movie[],
  setFilteredMovieList: SetterOrUpdater<Movie | Movie[]>
] => {
  const [filteredMovieList, setFilteredMovieList] = useRecoilState<Movie | Movie[]>(
    filteredMovieListSelector
  );
  return [filteredMovieList, setFilteredMovieList];
};

export default useFilteredMovieList;
