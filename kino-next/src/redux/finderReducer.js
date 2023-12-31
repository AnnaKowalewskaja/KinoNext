const ADD_TO_FAVORITES = "ADD-TO-FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE-FROM-FAVORITES",
  SET_MOVIES = "SET-MOVIES",
  SET_TOTAL_MOVIES_COUNT = "SET-TOTAL-MOVIES-COUNT",
  SET_TOTAL_PAGES = "SET-TOTAL-PAGES",
  CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE",
  TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING",
  CHANGE_PAGES = "CHANGE-PAGES",
  FAVORITE_IN_PROGRESS = "FAVORITE_IN_PROGRESS";

let initialState = {
  movies: [],
  totalMoviesCount: 0,
  currentPage: 1,
  totalPages: 1,
  isFetching: false,
  isFollowing: [],
  pages: [],
};

const finderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      let newState = {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.movieID) {
            return { ...movie, favorite: true };
          }

          return movie;
        }),
      };
      return newState;
    }

    case REMOVE_FROM_FAVORITES: {
      let newState = {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.movieID) {
            return { ...movie, favorite: false };
          }

          return movie;
        }),
      };
      return newState;
    }

    case SET_MOVIES: {
      return { ...state, movies: [...action.movies] };
    }

    case SET_TOTAL_MOVIES_COUNT: {
      return { ...state, totalMoviesCount: action.count };
    }

    case SET_TOTAL_PAGES: {
      return { ...state, totalPages: action.count };
    }

    case CHANGE_CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.toggle };
    }

    case CHANGE_PAGES: {
      return { ...state, pages: action.pages };
    }

    case FAVORITE_IN_PROGRESS: {
      return {
        ...state,
        isFollowing: action.toggle
          ? [...state.isFollowing, action.userID]
          : state.isFollowing.filter((id) => id !== action.userID),
      };
    }

    default:
      return state;
  }
};
export const addToFavorites = (movieID) => ({
  type: ADD_TO_FAVORITES,
  movieID,
});

export const removeFromFavorites = (movieID) => ({
  type: REMOVE_FROM_FAVORITES,
  movieID,
});

export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

export const setTotalMoviesCount = (count) => ({
  type: SET_TOTAL_MOVIES_COUNT,
  count,
});

export const setTotalPages = (count) => ({
  type: SET_TOTAL_PAGES,
  count,
});

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page,
});

export const toggleIsFetching = (toggle) => ({
  type: TOGGLE_IS_FETCHING,
  toggle,
});

export const changePages = (pages) => ({
  type: CHANGE_PAGES,
  pages,
});

export const toggleFollowingProgress = (toggle, userID) => ({
  type: FAVORITE_IN_PROGRESS,
  toggle,
  userID,
});

export default finderReducer;
