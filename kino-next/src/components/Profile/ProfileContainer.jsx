import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setMovieProfile, toggleIsFetching } from "../../redux/profileReducer";
import { aboutMovie } from "../../api/Api";

class ProfileAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    aboutMovie(575264)
      .then((response) => {
        this.props.setMovieProfile(response);
      })
      .catch((err) => console.error(err))
      .finally(this.props.toggleIsFetching(false));
  }

  componentDidUpdate(prevProps) {
    if (this.props.movieProfile.id !== prevProps.movieProfile.id) {
      this.props.toggleIsFetching(true);
      aboutMovie(575264)
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
  userName: state.auth.username,
  avatar_path: state.auth.avatar_path,
});

const ProfileContainer = connect(mapStateToProps, {
  setMovieProfile,
  toggleIsFetching,
})(ProfileAPI);

export default ProfileContainer;
