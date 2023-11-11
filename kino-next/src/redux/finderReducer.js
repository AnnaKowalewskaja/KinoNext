const ADD_TO_FAVORITES = 'ADD-TO-FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE-FROM-FAVORITES';
const SET_MOVIES = 'SET-MOVIES';
const SET_TOTAL_MOVIES_COUNT = 'SET-TOTAL-MOVIES-COUNT';
const SET_TOTAL_PAGES = 'SET-TOTAL-PAGES';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';


let initialState = {
    movies: [

    ],
    totalMoviesCount: 0,
    currentPage: 1,
    totalPages: 1,
}


const finderReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_FAVORITES: {
            let newState = {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.movieID) {
                        return { ...movie, favorite: true }
                    }

                    return movie;
                })
            }
            return newState;
        }

        case REMOVE_FROM_FAVORITES: {
            let newState = {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.movieID) {
                        return { ...movie, favorite: false }
                    }

                    return movie;
                })
            }
            return newState;
        }

        case SET_MOVIES: {
            return { ...state, movies: [...action.movies] }
        }

        case SET_TOTAL_MOVIES_COUNT: {
            return { ...state, totalMoviesCount: action.count }
        }

        case SET_TOTAL_PAGES: {
            return { ...state, totalPages: action.count }
        }

        case CHANGE_CURRENT_PAGE: {
       
            return { ...state, currentPage: action.page }
        }

        default:
            return state;
    }

}
export const addToFavoritesAC = (movieID) => ({
    type: ADD_TO_FAVORITES,
    movieID
})

export const removeFromFavoritesAC = (movieID) => ({
    type: REMOVE_FROM_FAVORITES,
    movieID
})

export const setMoviesAC = (movies) => ({
    type: SET_MOVIES,
    movies
})

export const setTotalMoviesCountAC = (count) => ({
    type: SET_TOTAL_MOVIES_COUNT,
    count
})

export const setTotalPagesAC = (count) => ({
    type: SET_TOTAL_PAGES,
    count
})

export const changeCurrentPageAC = (page) => ({
    type: CHANGE_CURRENT_PAGE,
    page
})

export default finderReducer;