import React from "react";
import styles from "./Profile.module.css";
import avatar from "../../assets/avatar.jpeg";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";
import { configureIMGAdress } from "../../api/Api";

const Profile = (props) => {
  if (props.isFetching) {
    return <Preloader />;
  }
  return (
    <div>
      <section className={styles.profile}>
        <div className={styles.profile__introduce}>
          <img
            src={
              props.avatar_path ? configureIMGAdress(props.avatar_path) : avatar
            }
            alt="avatar"
            className={styles.profile__avatar}
          />
          <p className={styles.profile__name}>{props.userName}</p>
        </div>
        <MyPostsContainer />
      </section>
    </div>
  );
};

export default Profile;
