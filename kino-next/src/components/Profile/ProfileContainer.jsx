import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setMovieProfile, toggleIsFetching } from "../../redux/profileReducer";
import optionsRequest from "../../optionsRequestConfig";

class ProfileAPI extends React.Component {
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: optionsRequest.Authorization,
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
          Authorization: optionsRequest.Authorization,
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