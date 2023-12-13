import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { toggleIsFetching } from "../../redux/profileReducer";

function ProfileAPI(props) {
  return <Profile {...props} />;
}

let mapStateToProps = (state) => ({
  movieProfile: state.profilePage.movieProfile,
  isFetching: state.profilePage.isFetching,
  userName: state.auth.username,
  avatar_path: state.auth.avatar_path,
});

const ProfileContainer = connect(mapStateToProps, {
  toggleIsFetching,
})(ProfileAPI);

export default ProfileContainer;
