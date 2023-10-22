import React from 'react';
import { addPostActionCreator, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.state;
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.dispatch(updateNewPostText(text));
    };


    return (
        <MyPosts posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}

        />
    )
}

export default MyPostsContainer;