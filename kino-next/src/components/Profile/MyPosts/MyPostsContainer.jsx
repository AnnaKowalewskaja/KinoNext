import { addPostActionCreator, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

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