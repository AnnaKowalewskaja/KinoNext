import Finder from "./Finder";
import React from "react";

import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  setMovies,
  setTotalMoviesCount,
  setTotalPages,
  changeCurrentPage,
  toggleIsFetching,
  changePages,
  toggleFollowingProgress,
} from "../../redux/finderReducer";
import { getFavoritesMovies, getMovies } from "../../api/Api";
class FinderAPI extends React.Component {
  async componentDidMount() {
    let pagesCount;
    this.props.toggleIsFetching(true);
    const MOVIES = getMovies(this.props.currentPage)
      .then(function (response) {
        let result = response.results;
        pagesCount = response.total_pages;
        return result.map((el) => {
          return {
            id: el.id,
            title: el.title,
            release: el.release_date,
            overview: el.overview,
            poster: `http://image.tmdb.org/t/p/original${el.poster_path}`,
            rating: el.vote_average.toFixed(1),
          };
        });
      })
      .catch((err) => console.error(err));
    let moviesArray = await MOVIES;
    this.favoriteMoviesID(moviesArray);
    this.props.setTotalPages(pagesCount);
    this.props.setMovies(moviesArray);
    this.props.toggleIsFetching(false);
    this.fillPagesArray(this.props.currentPage);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      let pagesCount;
      this.props.toggleIsFetching(true);
      const MOVIES = getMovies(this.props.currentPage)
        .then(function (response) {
          let result = response.results;
          pagesCount = response.total_pages;
          return result.map((el) => {
            return {
              id: el.id,
              title: el.title,
              release: el.release_date,
              overview: el.overview,
              poster: `http://image.tmdb.org/t/p/original${el.poster_path}`,
              rating: el.vote_average.toFixed(1),
            };
          });
        })
        .catch((err) => console.error(err));

      const moviesArray = await MOVIES;
      this.favoriteMoviesID(moviesArray);
      this.props.setTotalPages(pagesCount);
      this.props.setMovies(moviesArray);
      this.props.toggleIsFetching(false);
      this.fillPagesArray(this.props.currentPage);
    }
  }
  favoriteMoviesID(moviesArray) {
    getFavoritesMovies()
      .then((response) => {
        response.results.forEach((item) => {
          if (moviesArray.find((i) => i === item.id) !== -1) {
            this.props.addToFavorites(item.id);
          }
        });
      })
      .catch((err) => console.error(err));
  }

  onPageChange(pageNumber) {
    this.fillPagesArray(pageNumber);
    this.changeCurrentPage(pageNumber);
  }

  fillPagesArray(minPage) {
    let pages = [];
    for (let i = minPage; i <= minPage + 5; i++) {
      pages.push(i);
    }
    changePages(pages);
  }

  render() {
    return (
      <Finder
        {...this.props}
        onPageChange={this.onPageChange}
        fillPagesArray={this.fillPagesArray}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.finderPage.movies,
    currentPage: state.finderPage.currentPage,
    totalMoviesCount: state.finderPage.totalMoviesCount,
    totalPages: state.finderPage.totalPages,
    isFetching: state.finderPage.isFetching,
    isFollowing: state.finderPage.isFollowing,
    pages: state.finderPage.pages,
  };
};

const FinderContainer = connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites,
  setMovies,
  setTotalMoviesCount,
  setTotalPages,
  changeCurrentPage,
  toggleIsFetching,
  changePages,
  toggleFollowingProgress,
})(FinderAPI);

export default FinderContainer;
