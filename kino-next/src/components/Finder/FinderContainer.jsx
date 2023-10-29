import Finder from './Finder';
import { connect } from 'react-redux';
import { addToFavoritesAC, removeFromFavoritesAC, setMoviesAC } from '../../redux/finderReducer';




let mapStateToProps = (state) => {
    return {
        movies: state.finderPage.movies
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        addToFavorites: (id) => {
            dispatch(addToFavoritesAC(id));
        },
        removeFromFavorites: (id) => {
            dispatch(removeFromFavoritesAC(id));
        },

        setMovies: (movies) => {
            dispatch(setMoviesAC(movies));
        }
    }
}
const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;