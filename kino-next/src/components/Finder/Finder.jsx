import React from 'react';
import Preloader from '../Preloader/Preloader';
import styles from './Finder.module.css';
import MoveItem from './MoveItem/MoveItem';


let Finder = (props) => {

    let pagesNum = () => {
        let blockNum = [];

        for (let p = props.currentPage; p < props.currentPage + 5; p++) {
            blockNum.push(<button onClick={() => { props.onPageChange(p) }}
                className={`${styles.pageNum} ${props.currentPage === p && styles.pageNumSelected}`}>{`${p}`}</button>)
        }
        return blockNum;
    }

    return (
        <>
            {props.isFetching ?
            <Preloader style = {`${styles.finder__preloader} `}/> :
                <section className={`${styles.finder} `}>
                    {
                        pagesNum()
                    }

                    <div className={`${styles.movies} `}>
                        {props.movies.map(el =>
                            <MoveItem movie={el}
                                addToFavorites={props.addToFavorites}
                                removeFromFavorites={props.removeFromFavorites} />
                        )}


                    </div>

                </section >}

        </>

    )

}

export default Finder;