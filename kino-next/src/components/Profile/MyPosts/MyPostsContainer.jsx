import { addPostActionCreator, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsContainer = () => {

//     // let state = props.state;


//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     };

//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostText(text));
//                     };

//                     return (<MyPosts posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}
//                         addPost={addPost}
//                         updateNewPostText={onPostChange}
//                     />)
//                 }
//             }


//         </StoreContext.Consumer>

//     )
// }

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreator()); },
        updateNewPostText: (text) => {
            let action = updateNewPostText(text);
            dispatch(action);
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;