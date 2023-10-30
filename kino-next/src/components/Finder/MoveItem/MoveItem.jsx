import styles from './MoveItem.module.css';
import React from 'react';


const MoveItem = (props) => {
    const movie = props.movie;

    let onFavoriteClick = () => {
        if (movie.favorite) {
            console.log(`remove ${movie.favorite}`);
            props.removeFromFavorites(movie.id);
        } else {
            console.log(`add ${movie.favorite}`);

            props.addToFavorites(movie.id);
        }
    };
    return (
        <div className={`${styles.movie}`} key={movie.id}>

            <span>{movie.title}, {movie.year}</span>
            <button onClick={onFavoriteClick}>{movie.id ? 'Remove' : 'Add'}</button>

        </div>

    )
}


export default MoveItem;