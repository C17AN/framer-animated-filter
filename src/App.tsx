import FilterList from "./components/Filter/FilterList";
import MovieList from "./components/Movie/MovieList";
import useFetchMovie from "./hooks/useFetchMovie";
import useFilteredMovieList from "./hooks/useFilteredMovieList";

function App() {
  const movieList = useFetchMovie();
  const [filteredMovieList] = useFilteredMovieList();
  console.log(movieList);
  console.log("filtered: ", filteredMovieList);

  return (
    <div className="App">
      <FilterList />
      <MovieList movieListData={filteredMovieList} />
    </div>
  );
}

export default App;
