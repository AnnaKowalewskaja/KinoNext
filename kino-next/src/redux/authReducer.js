const SET_USER_DATA = "SET-USER-DATA";

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
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (id, username) => ({
  type: SET_USER_DATA,
  data: { id, username },
});

export default authReducer;
