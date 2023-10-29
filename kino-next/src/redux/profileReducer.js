const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {



    posts: [
        { id: 3, message: 'Feel good', likesCount: 7 },
        { id: 2, message: 'How are you?', likesCount: 5 },
        { id: 1, message: 'Hello', likesCount: 3 },
    ],

    newPostText: '',
    lastID: 3,

}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newState = {
                ...state,
                posts: [...state.posts],
                lastID: state.lastID + 1
            }

            let newPost = {
                id: state.lastID,
                message: state.newPostText,
                likesCount: Math.floor(Math.random() * 10),
            };

            newState.posts.unshift(newPost);
            newState.newPostText = '';

            return newState;

        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
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
