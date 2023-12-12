import React, { useEffect } from "react";
import { connect } from "react-redux";
import { aboutMovie, configureIMGAdress } from "../../api/Api";
import { setMovieProfile } from "../../redux/profileReducer";
import styles from "./AboutMovie.module.css";
import placeholderImg from "./../../assets/placeholder/placeholderImg.png";
function AboutMovieAPI(props) {
  const idFromURL = window.location.pathname.split("about-movie/")[1];
  useEffect(() => {
    aboutMovie(idFromURL)
      .then((response) => {
        props.setMovieProfile(response);
      })
      .catch((err) => console.error(err))
      .finally();
  }, []);

  return (
    <div>
      <img
        src={
          configureIMGAdress(props.movieProfile.poster_path) || placeholderImg
        }
        alt="poster"
        className={styles.movie__avatar}
      />
      <p> {props.movieProfile.original_title}</p>
      <p>{props.movieProfile.overview}</p>
    </div>
  );
}
let mapStateToProps = (state) => ({
  movieProfile: state.profilePage.movieProfile,
  isFetching: state.profilePage.isFetching,
});

const AboutMovieContainer = connect(mapStateToProps, {
  setMovieProfile,
})(AboutMovieAPI);
export default AboutMovieContainer;
