import React from "react";
import Preloader from "../Preloader/Preloader";
import styles from "./Finder.module.css";
import MoveItem from "./MoveItem/MoveItem";

let Finder = ({
  currentPage,
  onPageChange,
  isFetching,
  movies,
  addToFavorites,
  removeFromFavorites,
}) => {
  const pagesNum = () => {
    let blockNum = [];
    for (let p = currentPage; p < currentPage + 5; p++) {
      blockNum.push(
        <button
          onClick={() => {
            onPageChange(p);
          }}
          className={`${styles.pageNum} ${
            currentPage === p && styles.pageNumSelected
          }`}
        >{`${p}`}</button>
      );
    }
    return blockNum;
  };
  if (isFetching) {
    return <Preloader style={styles.finder__preloader} key={1} />;
  }
  return (
    <section className={styles.finder}>
      {pagesNum()}
      <div className={styles.movies}>
        {movies.map((el) => (
          <MoveItem
            movie={el}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            key={el.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Finder;
