import Finder from './Finder';
import { connect } from 'react-redux';
import {
    addToFavorites,
    removeFromFavorites,
    setMovies,
    setTotalMoviesCount,
    setTotalPages,
    changeCurrentPage,
    toggleIsFetching,
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


const FinderContainer = connect(mapStateToProps, {
    addToFavorites,
    removeFromFavorites,
    setMovies,
    setTotalMoviesCount,
    setTotalPages,
    changeCurrentPage,
    toggleIsFetching,
})(Finder);

export default FinderContainer;
