import styles from './Finder.module.css';
import MoveItem from './MoveItem/MoveItem';
import axios from 'axios';
import { React } from 'react';



class Finder extends React.Component {

    constructor(props) {
        super(props);
       
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated',
            params: { language: 'en-US', page: '1' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWUwYWE2ZmY0MDg2OGNjNGFiZjJmNWUyMzBkM2RmYSIsInN1YiI6IjY1NDIyODliYTU4OTAyMDE1N2QzZGU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ndpZxLZ3X5KKBi6j0GxQd4r34o9FbdKgneh6czHptY0'
            }
        };

        axios
            .request(options)
            .then(function (response) {

                let result = [...response.data.results];

                let movies = result.map((el) => {
                    return {
                        id: el.id,
                        title: el.title,
                        release: el.release_date,
                        overview: el.overview,
                        poster: `http://image.tmdb.org/t/p/original${el.poster_path}`,
                        rating: el.vote_average.toFixed(1),
                    }
                });
                this.props.setMovies(movies);

            })
            .catch(function (error) {
                console.error(error);
            });

    }



    // moviesBlock = () => {
    //     return this.props.movies.map(el =>
    //         <MoveItem movie={el}
    //             addToFavorites={this.props.addToFavorites}
    //             removeFromFavorites={this.props.removeFromFavorites} />
    //     );
    // }


    render() {
        return (
            <section className={`${styles.finder} `}>
                <div className={`${styles.movies} `}>
                    {/* {this.moviesBlock} */}

                    {this.props.movies.map(el =>
                        <MoveItem movie={el}
                            addToFavorites={this.props.addToFavorites}
                            removeFromFavorites={this.props.removeFromFavorites} />
                    )}
                </div>

            </section>
        )
    }
}

export default Finder;