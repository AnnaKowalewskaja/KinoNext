const SET_USER_DATA = "SET-USER-DATA";
const IS_USER_AUTH = "IS_USER_AUTH";
let initialState = {
  id: null,
  username: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        id: action.data.id,
        username: action.data.username,
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

export const setAuthUserData = (id, username) => ({
  type: SET_USER_DATA,
  data: { id, username },
});

export const isUserAuth = (isAuth) => ({
  type: IS_USER_AUTH,
  isAuth,
});

export default authReducer;
