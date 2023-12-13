import React, { useEffect } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, isUserAuth } from "../../redux/authReducer";
import { userAuthCheck } from "../../api/Api";

const HeaderAPI = (props) => {
  useEffect(() => {
    userAuthCheck()
      .then((response) => {
        if (response.success || response.id) {
          props.setAuthUserData(
            response.id,
            response.username,
            response.avatar.tmdb.avatar_path
          );
          props.isUserAuth(true);
        } else {
          props.isUserAuth(false);
        }
      })
      .catch((err) => console.error(err))
      .finally();
  }, [props]);

  return <Header {...props} />;
};

let mapStateToProps = (state) => ({
  userName: state.auth.username,
  isAuth: state.auth.isAuth,
});

const HeaderContainer = connect(mapStateToProps, {
  setAuthUserData,
  isUserAuth,
})(HeaderAPI);

export default HeaderContainer;
