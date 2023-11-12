import Finder from './Finder';
import { connect } from 'react-redux';
import {
    addToFavoritesAC,
    removeFromFavoritesAC,
    setMoviesAC,
    setTotalMoviesCountAC,
    setTotalPagesAC,
    changeCurrentPageAC,
    toggleIsFetchingAC,
} from '../../redux/finderReducer';




let mapStateToProps = (state) => {
    return {
        movies: state.finderPage.movies,
        currentPage: state.finderPage.currentPage,
        totalMoviesCount: state.finderPage.totalMoviesCount,
        totalPages: state.finderPage.totalPages,
        isFetching: state.finderPage.isFetching,
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
        },

        setTotalMoviesCount: (count) => {
            dispatch(setTotalMoviesCountAC(count));
        },

        setTotalPages: (count) => {
            dispatch(setTotalPagesAC(count));
        },

        changeCurrentPage: (page) => {
            dispatch(changeCurrentPageAC(page));
        },

        toggleIsFetching: (toggle) => {
            dispatch(toggleIsFetchingAC(toggle));
        }

    }
}
const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(Finder);

export default FinderContainer;
