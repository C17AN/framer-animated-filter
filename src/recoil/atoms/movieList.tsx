import { atom } from "recoil";
import Movie from "../../types/Movie";

const movieList = atom({
  key: "movieList",
  default: [] as Movie | Movie[],
});

export default movieList;
