import React from 'react';
import styles from './Profile.module.css';
import avatar from '../../assets/avatar.jpeg';

const Profile = (props) => {

    let newPostArea = React.createRef();
    let addPost = () => {
        let text = newPostArea.current.value;
        props.addPost(text);
        props.updateNewPostText('');
    }
    let onPostChange = () => {
        let text = newPostArea.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <section className={`${styles.profile} `}>
                <div className={`${styles.profile__introduce}`}>
                    <img src={avatar} alt="avatar" className={`${styles.profile__avatar}`} />
                    <p className={`${styles.profile__name}`}>Name</p>
                    <p className={`${styles.profile__surname}`}>surname</p>
                </div>

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
                        here your
                        posts
                    </div>
                </div>

            </section >
        </div>
    )
}

export default Profile;