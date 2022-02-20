import endpoints from "../../constants/endpoints";
import Movie from "../../types/Movie";

type MovieAPIResponse = {
  data: Movie | Movie[];
  status: number;
};

export const getMovieList = async (): Promise<MovieAPIResponse> => {
  try {
    const res = await fetch(endpoints.getMovieList);
    const data = await res.json();
    const parsedData = data.results.map((result) => {
      const image = result.backdrop_path;
      const genreList = result.genre_ids;
      delete result["backdrop_path"];
      delete result["genre_ids"];
      return { ...result, image, genreList };
    });
    return { data: parsedData, status: 200 };
  } catch (err) {
    return { data: err, status: 500 };
  }
};
