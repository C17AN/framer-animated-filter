import useMovieList from "./useMovieList";
import { useEffect } from "react";
import { getMovieList } from "../apis/movie/getMovieList";

const useFetchMovie = () => {
  const [movieList, setMovieList] = useMovieList();

  const initializeData = async () => {
    const { data } = await getMovieList();
    setMovieList(data);
  };

  useEffect(() => {
    initializeData();
  }, []);

  return movieList;
};

export default useFetchMovie;
