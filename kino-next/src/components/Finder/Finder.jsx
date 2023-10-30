import styles from './Finder.module.css';
import MoveItem from './MoveItem/MoveItem';




const Finder = (props) => {
    

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