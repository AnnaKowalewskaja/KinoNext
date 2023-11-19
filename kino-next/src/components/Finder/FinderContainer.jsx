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
} from "../../redux/finderReducer";
import optionsRequest from "../../optionsRequestConfig";
class FinderAPI extends React.Component {
  async componentDidMount() {
    const OPTIONS = {
      method: "GET",
      url: optionsRequest.urlTopRated,
      params: { language: "en-US", page: `${this.props.currentPage}` },
      headers: {
        accept: "application/json",
        Authorization: optionsRequest.Authorization,
      },
    };
    let pagesCount;
    this.props.toggleIsFetching(true);
    const MOVIES = fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.props.currentPage}`,
      OPTIONS
    )
      .then((response) => response.json())
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
    this.props.setTotalPages(pagesCount);
    this.props.setMovies(await MOVIES);
    this.props.toggleIsFetching(false);
    this.fillPagesArray(this.props.currentPage);
  }

  async componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      const OPTIONS = {
        method: "GET",
        url: optionsRequest.urlTopRated,
        params: { language: "en-US", page: `${this.props.currentPage}` },
        headers: {
          accept: "application/json",
          Authorization: optionsRequest.Authorization,
        },
      };
      let pagesCount;
      this.props.toggleIsFetching(true);
      const MOVIES = fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.props.currentPage}`,
        OPTIONS
      )
        .then((response) => response.json())
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
      this.props.setTotalPages(pagesCount);
      this.props.setMovies(await MOVIES);
      this.props.toggleIsFetching(false);
      this.fillPagesArray(this.props.currentPage);
    }
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
})(FinderAPI);

export default FinderContainer;
