import React from "react";
import optionsRequest from "../../optionsRequestConfig";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";

class HeaderAPI extends React.Component {
  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: optionsRequest.Authorization,
      },
    };
    fetch("https://api.themoviedb.org/3/account/20652120", options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success || response.id) {
          this.props.setAuthUserData(response.id, response.username);
        } else {
          console.log(response);
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

const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(
  HeaderAPI
);

export default HeaderContainer;
