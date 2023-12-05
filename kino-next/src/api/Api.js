import optionsRequest from "../optionsRequestConfig";
const OPTIONS_GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: optionsRequest.Authorization,
  },
};

export const getMovies = (currentPage = 1) => {
  return fetch(
    `${optionsRequest.baseURL}movie/popular?language=en-US&page=${currentPage}`,
    OPTIONS_GET
  ).then((response) => response.json());
};

export const getFavoritesMovies = (currentPage = 1) => {
  return fetch(
    `${optionsRequest.baseURL}account/20652120/favorite/movies?language=en-US&page=${currentPage}&sort_by=created_at.asc`,
    OPTIONS_GET
  ).then((response) => response.json());
};

export const userAuthCheck = () => {
  return fetch(
    `${optionsRequest.baseURL}account/20652120`,
    OPTIONS_GET
  ).then((response) => response.json());
};

export const aboutMovie = (movieID) => {
  return fetch(
    `${optionsRequest.baseURL}movie/${movieID}?language=en-US`,
    OPTIONS_GET
  ).then((response) => response.json());
};

export const favoriteMoviePost = (movieID, isFavorite) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: optionsRequest.Authorization,
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieID,
      favorite: isFavorite,
    }),
  };
  return fetch(
    `${optionsRequest.baseURL}account/20652120/favorite`,
    options
  ).then((response) => response.json());
};

export const configureIMGAdress = (path, size = `original`) => {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
};
