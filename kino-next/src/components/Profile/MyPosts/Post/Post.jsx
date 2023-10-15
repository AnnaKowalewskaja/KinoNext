import React from 'react';
import styles from './Post.module.css';
import like from '../../../../assets/posts/like.png';

const Post = (props) => {


    return (
        <div>
            <p>{props.message}</p>
            <div className={`${styles.like}`}>
                <p className={`${styles.like__message}`}>{props.likesCount}</p>
                <img src={like} alt="likes"
                    className={`${styles.like__img}`} />
            </div>

        </div>
    )
}

export default Post;