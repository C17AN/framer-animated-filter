import React from "react";
import Movie from "../../types/Movie";
import MovieItem from "./MovieItem";
import styles from "./MovieList.module.scss";
import { motion, AnimatePresence } from "framer-motion";

type MovieListProps = {
  movieListData: Movie | Movie[];
};

const MovieList = ({ movieListData }: MovieListProps) => {
  return Array.isArray(movieListData) ? (
    <AnimatePresence>
      <motion.ul layout className={styles.movie__list}>
        {movieListData.map((movieData) => {
          const { title, image, id, genreList } = movieData;
          return <MovieItem title={title} image={image} id={id} key={id} genreList={genreList} />;
        })}
      </motion.ul>
    </AnimatePresence>
  ) : (
    <MovieItem
      title={movieListData.title}
      image={movieListData.image}
      id={movieListData.id}
      genreList={movieListData.genreList}
    />
  );
};

export default MovieList;
