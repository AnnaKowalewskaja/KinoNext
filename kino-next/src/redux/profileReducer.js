const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_MOVIE_PROFILE = "SET-MOVIE-ƒPROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
  posts: [
    { id: 3, message: "Feel good", likesCount: 7 },
    { id: 2, message: "How are you?", likesCount: 5 },
    { id: 1, message: "Hello", likesCount: 3 },
  ],

  newPostText: "",
  lastID: 3,
  movieProfile: {},
  isFetching: false,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newState = {
        ...state,
        posts: [...state.posts],
        lastID: state.lastID + 1,
      };
      const newPost = {
        id: state.lastID + 1,
        message: state.newPostText,
        likesCount: Math.floor(Math.random() * 10),
      };
      newState.posts.unshift(newPost);
      newState.newPostText = "";
      return newState;
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_MOVIE_PROFILE:
      return {
        ...state,
        movieProfile: action.movieProfile,
      };
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.toggle };
    }
    default:
      return state;
  }
};
export const addPost = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setMovieProfile = (movieProfile) => ({
  type: SET_MOVIE_PROFILE,
  movieProfile,
});

export const toggleIsFetching = (toggle) => ({
  type: TOGGLE_IS_FETCHING,
  toggle,
});
export default profileReducer;
