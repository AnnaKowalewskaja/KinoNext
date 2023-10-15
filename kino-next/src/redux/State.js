
let store = {

    _state: {
        notesPage: [{ title: 'GreenLand', id: 1, messages: ['super film', 'normal film'] },
        { title: 'A man called Otto', id: 2, messages: ['very interesting', 'good film'] },
        { title: 'Totally killer', id: 3, messages: ['super film'] },
        { title: 'The sea of trees', id: 4, messages: ['I`ll look later', 'good film',] },
        { title: 'J.Edgar', id: 5, messages: ['bad film'] }],

        profilePage: {
            posts: [
                { id: 3, message: 'Feel good', likesCount: 7 },
                { id: 2, message: 'How are you?', likesCount: 5 },
                { id: 1, message: 'Hello', likesCount: 3 },
            ],

            newPostText: '',
        },


    },


    _callSubscriber() {
        console.log('state change')
    },

    _addPost() {

        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            likesCount: Math.floor(Math.random() * 10),
        }
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost();
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this._updateNewPostText(action.newText);
                break;


                default:
                    alert('error');
        }
    }

}

export default store;
window.store = store;