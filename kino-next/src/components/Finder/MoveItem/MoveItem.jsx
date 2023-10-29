import styles from './MoveItem.module.css';


const MoveItem = (props) => {
    const movie = props.movie;
    return (
        <div className={`${styles.movie}`} key={movie.id}>

            <span>{movie.title}, {movie.year}</span>
            <button onClick={props.addNote}>{movie.favorite ? 'Remove' : 'Add'}</button>
        </div>

    )
}

export default MoveItem;