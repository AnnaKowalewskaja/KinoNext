import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ addPost, updateNewPostText, posts, newPostText }) => {
  const onPostChange = (event) => {
    updateNewPostText(event.target.value);
  };
  let postsElements = posts.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} key={el.id} />
  ));
  return (
    <div>
      <div className={styles.posts}>
        <p className={styles.posts__title}>My Posts:</p>
        <textarea
          onChange={onPostChange}
          value={newPostText}
          className={styles.posts__area}
          name="add post"
          id="add-post"
          cols="50"
          rows="3"
        />
        <button className={styles.posts__add} onClick={addPost}>
          Add post
        </button>
        <div className={styles.posts__block}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
