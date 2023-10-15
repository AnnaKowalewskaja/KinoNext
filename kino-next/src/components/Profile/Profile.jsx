import React from 'react';
import styles from './Profile.module.css';
import avatar from '../../assets/avatar.jpeg';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {



    return (
        <div>
            <section className={`${styles.profile} `}>
                <div className={`${styles.profile__introduce}`}>
                    <img src={avatar} alt="avatar" className={`${styles.profile__avatar}`} />
                    <p className={`${styles.profile__name}`}>Name</p>
                    <p className={`${styles.profile__surname}`}>surname</p>
                </div>
                <MyPosts profilePage={props.profilePage}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}
                />

            </section >
        </div>
    )
}

export default Profile;