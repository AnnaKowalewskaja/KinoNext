import React from 'react';
import styles from './Profile.module.css';
import avatar from '../../assets/avatar.jpeg';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {


    return (
        <div>
            <section className={`${styles.profile} `}>
                <div className={`${styles.profile__introduce}`}>
                    <img src={avatar} alt="avatar" className={`${styles.profile__avatar}`} />
                    <p className={`${styles.profile__name}`}>Name</p>
                    <p className={`${styles.profile__surname}`}>surname</p>
                </div>
                <MyPostsContainer  />

            </section >
        </div>
    )
}

export default Profile;