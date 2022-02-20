import React, { useState } from "react";
import genres from "../../constants/genres";
import useMovieList from "../../hooks/useMovieList";
import styles from "./FilterList.module.scss";
import FilterButton from "./FilterButton";
import useFilteredMovieList from "../../hooks/useFilteredMovieList";

const FilterList = () => {
  const [movieList] = useMovieList();
  const [_, setFilteredMovieList] = useFilteredMovieList();
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const handleFilterButtonClick = (genreId: number) => {
    if (genreId === selectedFilter) {
      setSelectedFilter(null);
      setFilteredMovieList(movieList);
      return;
    }
    if (Array.isArray(movieList)) {
      const _filteredMovieList = movieList.filter((movie) => {
        const { genreList } = movie;
        return !!(genreList.indexOf(genreId) > 0);
      });
      setSelectedFilter(genreId);
      setFilteredMovieList(_filteredMovieList);
    } else {
      return;
    }
  };

  return (
    <div className={styles.container}>
      {genres.map((genre) => {
        const { id, name } = genre;
        const isSelected = id === selectedFilter;
        return (
          <FilterButton isSelected={isSelected} onClick={() => handleFilterButtonClick(id)}>
            {name}
          </FilterButton>
        );
      })}
    </div>
  );
};

export default FilterList;
