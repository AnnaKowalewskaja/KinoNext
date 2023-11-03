import styles from './MoveItem.module.css';
import React from 'react';


const MoveItem = (props) => {
    const movie = props.movie;

    let onFavoriteClick = () => {
        if (movie.favorite) {
            props.removeFromFavorites(movie.id);
        } else {
            props.addToFavorites(movie.id);
        }
    };


    return (
        <div className={`${styles.movie}`} key={movie.id}>

            <div className={styles.movie__img}>
                <img src={movie.poster} alt="poster" className={styles.movie__avatar} />
            </div>
            <div className={styles.movie__information}>
                <p className={styles.information__title}>{movie.title}</p>
                <p className={styles.information__rating}>{movie.rating}</p>
                <p className={styles.information__release}>{movie.release}</p>
                <p className={styles.information__overview}>{movie.overview}</p>
               

            </div>
            <div className={styles.movie__favorite}>
                <button onClick={onFavoriteClick}>{movie.favorite ? 'Remove' : 'Add'}</button>
            </div>


        </div>

    )
}


export default MoveItem;