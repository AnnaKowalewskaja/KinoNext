const ADD_TO_FAVORITES = 'ADD-TO-FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE-FROM-FAVORITES';
const SET_MOVIES = 'SET-MOVIES';

let initialState = {
    movies: [
        
    ]

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
            return { ...state, movies: [...state.movies, ...action.movies] }
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

export default finderReducer;