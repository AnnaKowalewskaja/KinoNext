import React from 'react';
import { addPostActionCreator, updateNewPostText } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {

    // let state = props.state;


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostText(text));
                    };

                    return (<MyPosts posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                        addPost={addPost}
                        updateNewPostText={onPostChange}
                    />)
                }
            }


        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;