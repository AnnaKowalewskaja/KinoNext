import styles from './Finder.module.css';
import MoveItem from './MoveItem/MoveItem';
import axios from 'axios';



const Finder = (props) => {


    if (props.movies.length === 0) {



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
                props.setMovies(movies);

            })
            .catch(function (error) {
                console.error(error);
            });


    }


    let moviesBlock = props.movies.map(el =>
        <MoveItem movie={el}
            addToFavorites={props.addToFavorites}
            removeFromFavorites={props.removeFromFavorites} />
    );
    return (
        <section className={`${styles.finder} `}>
            <div className={`${styles.movies} `}>

                {moviesBlock}

            </div>

        </section>
    )
}

export default Finder;