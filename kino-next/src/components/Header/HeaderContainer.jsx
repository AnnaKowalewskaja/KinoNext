import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, isUserAuth } from "../../redux/authReducer";
import { userAuthCheck } from "../../api/Api";

class HeaderAPI extends React.Component {
  componentDidMount() {
    userAuthCheck()
      .then((response) => {
        if (response.success || response.id) {
          this.props.setAuthUserData(
            response.id,
            response.username,
            response.avatar.tmdb.avatar_path
          );
          this.props.isUserAuth(true);
        } else {
          this.props.isUserAuth(false);
        }
      })
      .catch((err) => console.error(err));
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  userName: state.auth.username,
  isAuth: state.auth.isAuth,
});

const HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  isUserAuth,
})(HeaderAPI);

export default HeaderContainer;
