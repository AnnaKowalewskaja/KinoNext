import styles from "./MoveItem.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

import { favoriteMoviePost } from "../../../api/Api";

const MoveItem = (props) => {
  const movie = props.movie;
  let onFavoriteClick = () => {
    props.toggleFollowingProgress(true, movie.id);
    if (movie.favorite) {
      favoriteMoviePost(movie.id, false)
        .then((response) => {
          if (response.success) {
            props.removeFromFavorites(movie.id);
          }
        })
        .finally(() => {
          props.toggleFollowingProgress(false, movie.id);
        })
        .catch((err) => console.error(err));
    } else {
      favoriteMoviePost(movie.id, true)
        .then((response) => {
          if (response.success) {
            props.addToFavorites(movie.id);
          }
        })
        .finally(() => {
          props.toggleFollowingProgress(false, movie.id);
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <div className={`${styles.movie}`} key={movie.id}>
      <div className={styles.movie__img}>
        <NavLink to={"/profile/" + movie.id}>
          <img
            src={movie.poster}
            alt="poster"
            className={styles.movie__avatar}
          />
        </NavLink>
      </div>
      <div className={styles.movie__information}>
        <p className={styles.information__title}>{movie.title}</p>
        <p className={styles.information__rating}>{movie.rating}</p>
        <p className={styles.information__release}>{movie.release}</p>
        <p className={styles.information__overview}>{movie.overview}</p>
      </div>
      <div className={styles.movie__favorite}>
        {movie.favorite ? (
          <button
            onClick={onFavoriteClick}
            disabled={props.isFollowing.some((id) => id === movie.id)}
          >
            Remove
          </button>
        ) : (
          <button
            onClick={onFavoriteClick}
            disabled={props.isFollowing.some((id) => id === movie.id)}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default MoveItem;
