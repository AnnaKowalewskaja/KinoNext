const SET_USER_DATA = "SET-USER-DATA";
const IS_USER_AUTH = "IS_USER_AUTH";
let initialState = {
  id: null,
  username: null,
  avatar_path: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        id: action.data.id,
        username: action.data.username,
        avatar_path: action.data.avatar_path,
      };

    case IS_USER_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (id, username, avatar_path) => ({
  type: SET_USER_DATA,
  data: { id, username, avatar_path },
});

export const isUserAuth = (isAuth) => ({
  type: IS_USER_AUTH,
  isAuth,
});

export default authReducer;
