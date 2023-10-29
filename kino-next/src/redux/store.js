
import profileReducer from './profileReducer';
import notesReducer from './notesReducer';




let store = {

    _state: {

        notesPage: {
            notes: [{ title: 'GreenLand', id: 1, messages: ['super film', 'normal film'] },
            { title: 'A man called Otto', id: 2, messages: ['very interesting', 'good film'] },
            { title: 'Totally killer', id: 3, messages: ['super film'] },
            { title: 'The sea of trees', id: 4, messages: ['I`ll look later', 'good film',] },
            { title: 'J.Edgar', id: 5, messages: ['bad film'] }],

            newMessageText: '',

        },


        profilePage: {

            posts: [
                { id: 3, message: 'Feel good', likesCount: 7 },
                { id: 2, message: 'How are you?', likesCount: 5 },
                { id: 1, message: 'Hello', likesCount: 3 },
            ],

            newPostText: '',
            lastID: this.posts[0].id,

        },


    },


    _callSubscriber() {
        console.log('state change')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.notesPage = notesReducer(this._state.notesPage, action);
        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;