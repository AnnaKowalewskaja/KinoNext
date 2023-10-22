
const ADD_NOTE = 'ADD-NOTE';
const UPDATE_NEW_NOTE_TEXT = 'UPDATE-NEW-NOTE-TEXT';

const notesReducer = (state, action) => {
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

export default  notesReducer;