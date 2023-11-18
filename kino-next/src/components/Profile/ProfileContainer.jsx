import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setMovieProfile, toggleIsFetching } from "../../redux/profileReducer";

class ProfileAPI extends React.Component {
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwYWE2ZmY0MDg2OGNjNGFiZjJmNWUyMzBkM2RmYSIsInN1YiI6IjY1NDIyODliYTU4OTAyMDE1N2QzZGU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndpZxLZ3X5KKBi6j0GxQd4r34o9FbdKgneh6czHptY0",
      },
    };
    this.props.toggleIsFetching(true);
    fetch("https://api.themoviedb.org/3/movie/575264?language=en-US", options)
      .then((response) => response.json())
      .then((response) => {
        this.props.setMovieProfile(response);
      })
      .catch((err) => console.error(err))
      .finally(this.props.toggleIsFetching(false));
  }

  componentDidUpdate(prevProps) {
    if (this.props.movieProfile.id !== prevProps.movieProfile.id) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwYWE2ZmY0MDg2OGNjNGFiZjJmNWUyMzBkM2RmYSIsInN1YiI6IjY1NDIyODliYTU4OTAyMDE1N2QzZGU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndpZxLZ3X5KKBi6j0GxQd4r34o9FbdKgneh6czHptY0",
        },
      };
      this.props.toggleIsFetching(true);
      fetch("https://api.themoviedb.org/3/movie/575264?language=en-US", options)
        .then((response) => response.json())
        .then((response) => {
          this.props.setMovieProfile(response);
        })
        .catch((err) => console.error(err))
        .finally(this.props.toggleIsFetching(false));
    }
  }
  render() {
    return <Profile {...this.props} movieProfile={this.props.movieProfile} />;
  }
}

let mapStateToProps = (state) => ({
  movieProfile: state.profilePage.movieProfile,
  isFetching: state.profilePage.isFetching,
});

const ProfileContainer = connect(mapStateToProps, {
  setMovieProfile,
  toggleIsFetching,
})(ProfileAPI);
export default ProfileContainer;
