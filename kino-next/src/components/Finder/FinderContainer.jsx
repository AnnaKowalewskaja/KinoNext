import React, { useEffect } from "react";
import Finder from "./Finder";
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
import { getFavoritesMoviesAPI, getMoviesAPI } from "../../api/Api";

const FinderAPI = (props) => {
  useEffect(() => {
    const favoriteMoviesID = (moviesArray) => {
      getFavoritesMoviesAPI()
        .then((response) => {
          response.results.forEach((item) => {
            if (moviesArray.find((i) => i === item.id) !== -1) {
              props.addToFavorites(item.id);
            }
          });
        })
        .catch((err) => console.error(err));
    };
    let pagesCount;
    let movies = [];
    props.toggleIsFetching(true);
    getMoviesAPI(props.currentPage)
      .then(function (response) {
        let result = response.results;
        pagesCount = response.total_pages;
        movies = result.map((el) => {
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
      .finally(() => {
        favoriteMoviesID(movies);
        props.setTotalPages(pagesCount);
        props.setMovies(movies);
        props.toggleIsFetching(false);
        fillPagesArray(props.currentPage);
      })
      .catch((err) => console.error(err));
  }, [
    props.currentPage,
    props.addToFavorites,
    props.toggleIsFetching,
    props.setTotalPages,
    props.setMovies,
  ]);

  const onPageChange = (pageNumber) => {
    fillPagesArray(pageNumber);
    props.changeCurrentPage(pageNumber);
  };

  const fillPagesArray = (minPage) => {
    let pages = [];
    for (let i = minPage; i <= minPage + 5; i++) {
      pages.push(i);
    }
    props.changePages(pages);
  };

  return (
    <Finder
      {...props}
      onPageChange={onPageChange}
      fillPagesArray={fillPagesArray}
    />
  );
};

const mapStateToProps = (state) => {
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

const mapDispatchToProps = {
  addToFavorites,
  removeFromFavorites,
  setMovies,
  setTotalMoviesCount,
  setTotalPages,
  toggleIsFetching,
  changePages,
  toggleFollowingProgress,
  changeCurrentPage,
};

const FinderContainer = connect(mapStateToProps, mapDispatchToProps)(FinderAPI);

export default FinderContainer;
