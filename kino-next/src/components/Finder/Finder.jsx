import React from 'react';
import styles from './Finder.module.css';
import MoveItem from './MoveItem/MoveItem';
import preloaderImg from './../../assets/icon/preloader.gif'

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
                <img src={preloaderImg} className={`${styles.finder__preloader} `} alt='preloader' /> :
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