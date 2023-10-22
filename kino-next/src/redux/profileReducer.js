const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {

    _addPost() {

        let newPost = {
            id: 1,
            message: this.newPostText,
            likesCount: Math.floor(Math.random() * 10),
        }
        this.posts.unshift(newPost);
        this.newPostText = '';

    },

    _updateNewPostText(newText) {
        this.newPostText = newText;

    },

    posts: [
        { id: 3, message: 'Feel good', likesCount: 7 },
        { id: 2, message: 'How are you?', likesCount: 5 },
        { id: 1, message: 'Hello', likesCount: 3 },
    ],

    newPostText: '',


}
const profileReducer = (state = initialState, action) => {
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
