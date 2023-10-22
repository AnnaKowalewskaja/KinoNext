
const ADD_NOTE = 'ADD-NOTE';
const UPDATE_NEW_NOTE_TEXT = 'UPDATE-NEW-NOTE-TEXT';

let initialState = {

    _addNote() {
        let newNote = this.newMessageText;
        this.notes[this.notes.length - 1].messages.push(newNote);
        this.newMessageText = '';
    },

    _updateNewNoteText(newText) {
        this.newMessageText = newText;
    },

    notes: [{ title: 'GreenLand', id: 1, messages: ['super film', 'normal film'] },
    { title: 'A man called Otto', id: 2, messages: ['very interesting', 'good film'] },
    { title: 'Totally killer', id: 3, messages: ['super film'] },
    { title: 'The sea of trees', id: 4, messages: ['I`ll look later', 'good film',] },
    { title: 'J.Edgar', id: 5, messages: ['bad film'] }],

    newMessageText: '',

}


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            state._addNote();
            return state;
        case UPDATE_NEW_NOTE_TEXT:
            state._updateNewNoteText(action.newText);
            return state;

        default:
            return state;
    }

}
export const addNoteActionCreator = () => ({
    type: ADD_NOTE,
})

export const updateNewNoteText = (text) => ({
    type: UPDATE_NEW_NOTE_TEXT,
    newText: text,
})

export default notesReducer;