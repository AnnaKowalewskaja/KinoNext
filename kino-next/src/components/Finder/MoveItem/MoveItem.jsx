import styles from "./MoveItem.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import optionsRequest from "../../../optionsRequestConfig";

const MoveItem = (props) => {
  const movie = props.movie;
  let onFavoriteClick = () => {
    if (movie.favorite) {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: optionsRequest.Authorization,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          favorite: false,
        }),
      };

      fetch("https://api.themoviedb.org/3/account/20652120/favorite", options)
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            props.removeFromFavorites(movie.id);
          }
        })
        .catch((err) => console.error(err));
    } else {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: optionsRequest.Authorization,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: movie.id,
          favorite: true,
        }),
      };
      fetch("https://api.themoviedb.org/3/account/20652120/favorite", options)
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            props.addToFavorites(movie.id);
          }
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
          <button onClick={onFavoriteClick}>Remove</button>
        ) : (
          <button onClick={onFavoriteClick}>Add</button>
        )}
      </div>
    </div>
  );
};

export default MoveItem;
