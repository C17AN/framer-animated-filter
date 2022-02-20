import React from "react";
import Movie from "../../types/Movie";
import styles from "./MovieItem.module.scss";
import { motion } from "framer-motion";

const MovieItem = ({ title, image, id, genreList }: Movie) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + image;

  return (
    <motion.li
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <h2 className={styles["movie__title"]}>{title}</h2>
      <img className={styles.img} src={imageUrl} alt={title} />
    </motion.li>
  );
};

export default MovieItem;
