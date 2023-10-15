import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostText } from '../../../redux/State';


const MyPosts = (props) => {

    let newPostArea = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostArea.current.value;
        props.dispatch(updateNewPostText(text));
    };

    let postsElements = props.profilePage.posts.map(el => <Post
        message={el.message} likesCount={el.likesCount} />);

    return (
        <div>
            <div className={`${styles.posts}`}>
                <p className={`${styles.posts__title}`}>My Posts:</p>
                <textarea onChange={onPostChange}
                    ref={newPostArea}
                    value={props.profilePage.newPostText}

                    className={`${styles.posts__area}`}
                    name="add post"
                    id="add-post"
                    cols="50"
                    rows="3" />


                <button className={`${styles.posts__add}`}
                    onClick={addPost}>Add post
                </button>

                <div className={`${styles.posts__block}`}>
                    {postsElements}
                </div>
            </div>


        </div>
    )
}

export default MyPosts;