import React from 'react';

import styles from './Finder.module.css';
import MoveItem from './MoveItem/MoveItem';



class Finder extends React.Component {

    constructor() {
        super();
        this.pages = [];

    }

    async componentDidMount(currentPage = 1) {


        const OPTIONS = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
            params: { language: 'en-US', page: `${currentPage}` },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwYWE2ZmY0MDg2OGNjNGFiZjJmNWUyMzBkM2RmYSIsInN1YiI6IjY1NDIyODliYTU4OTAyMDE1N2QzZGU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndpZxLZ3X5KKBi6j0GxQd4r34o9FbdKgneh6czHptY0'
            }
        };

        let pagesCount;

        const MOVIES = fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${currentPage}`, OPTIONS)
            .then(response => response.json())
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
                    }
                })
            })
            .catch(err => console.error(err));


        this.props.setTotalPages(pagesCount);
        this.props.setMovies(await MOVIES);

        this.fillPagesArray(currentPage);
    }


    onPageChange(pageNumber) {
        this.fillPagesArray(pageNumber);
        this.props.changeCurrentPage(pageNumber);
        this.componentDidMount(pageNumber);
    }

    pagesNum() {
        let blockNum = [];
        for (let p = 1; p < 6; p++) {
            blockNum.push(<button onClick={() => { this.onPageChange(p) }}
                className={`${styles.pageNum} ${this.props.currentPage === p && styles.pageNumSelected}`}>{`${p}`}</button>)
        }

        return blockNum;
    }

    fillPagesArray(minPage) {
        this.pages = [];
        for (let i = minPage; i <= minPage + 5; i++) {
            this.pages.push(i);
        }


    }

    render() {
        return (
            <section className={`${styles.finder} `}>

                {
                    this.pagesNum()
                }

                <div className={`${styles.movies} `}>
                    {this.props.movies.map(el =>
                        <MoveItem movie={el}
                            addToFavorites={this.props.addToFavorites}
                            removeFromFavorites={this.props.removeFromFavorites} />
                    )}


                </div>

            </section >
        )
    }
}

export default Finder;