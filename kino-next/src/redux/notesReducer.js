
const ADD_NOTE = 'ADD-NOTE';
const UPDATE_NEW_NOTE_TEXT = 'UPDATE-NEW-NOTE-TEXT';

let initialState = {

    notes: [{ title: 'GreenLand', id: 1, messages: ['super film', 'normal film'] },
    { title: 'A man called Otto', id: 2, messages: ['very interesting', 'good film'] },
    { title: 'Totally killer', id: 3, messages: ['super film'] },
    { title: 'The sea of trees', id: 4, messages: ['I`ll look later', 'good film',] },
    { title: 'J.Edgar', id: 5, messages: ['bad film'] }],

    newMessageText: '',

}


const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NOTE: {
            let newNote = state.newMessageText;
            let newState = {
                ...state,
                notes: [...state.notes],
            }
            newState.notes[newState.notes.length - 1].messages.push(newNote);
            newState.newMessageText = '';

            return newState;
        }
        case UPDATE_NEW_NOTE_TEXT:
            return { ...state, newMessageText: action.newText };
        default:
            return state;
    }

}
export const addNoteActionCreator = () => ({
    type: ADD_NOTE,
})

export const updateNewNoteText = (newText) => ({
    type: UPDATE_NEW_NOTE_TEXT,
    newText,
})

export default notesReducer;