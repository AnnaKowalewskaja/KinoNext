
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
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state change')
    },

    addPost() {

        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            likesCount: Math.floor(Math.random() * 10),
        }
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    setContent(content) {
        this._content = content;
    },



}

export default store;
window.store = store;