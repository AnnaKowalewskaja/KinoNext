const ADD_TO_FAVORITES = 'ADD-TO-FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE-FROM-FAVORITES';
const SET_MOVIES = 'SET-MOVIES';

let initialState = {
    movies: [
        {
            id: 1,
            title: 'Poor Things',
            year: '2023',
            genre: ['melodrama', 'drama'],
            country: 'USA',
            favorite: false,
        },

        {
            id: 2,
            title: 'Hit Man',
            year: '2023',
            genre: ['thriller'],
            country: 'USA',
            favorite: false,
        },

        {
            id: 3,
            title: 'Dark',
            year: '2017-2020',
            genre: ['detective'],
            country: 'Germany',
            favorite: false,
        }
    ]

}


const finderReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_FAVORITES: {
            let stateCopy = {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.movieID) {
                        return { ...movie, favorite: true }
                    }

                    return movie;
                })
            }
            return stateCopy;
        }

        case REMOVE_FROM_FAVORITES: {
            let stateCopy = {
                ...state,
                movies: state.movies.map((movie) => {
                    if (movie.id === action.movieID) {
                        return { ...movie, favorite: false }
                    }

                    return movie;
                })
            }
            return stateCopy;
        }

        case SET_MOVIES: {
            return { ...state, movies: [...state.movies, action.movies] }
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