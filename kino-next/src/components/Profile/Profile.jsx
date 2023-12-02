import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../assets/avatar.jpeg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
  if (props.isFetching) {
    return <Preloader />;
  }
  return (
    <div>
      <section className={styles.profile}>
        <div className={styles.profile__introduce}>
          <img src={avatar} alt="avatar" className={styles.profile__avatar} />
          <p className={styles.profile__name}>Name</p>
          <p className={styles.profile__surname}>surname</p>
          <p className={styles.profile__surname}>
            {props.movieProfile.original_title}
          </p>
        </div>
        <MyPostsContainer />
      </section>
    </div>
  );
};

export default Profile;
