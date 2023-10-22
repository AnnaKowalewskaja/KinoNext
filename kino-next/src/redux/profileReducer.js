const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state._addPost();
            return state;
        case UPDATE_NEW_POST_TEXT:
            state._updateNewPostText(action.newText);
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export default profileReducer;
