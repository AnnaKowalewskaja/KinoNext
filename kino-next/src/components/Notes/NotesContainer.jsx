import { addNoteActionCreator, updateNewNoteText } from '../../redux/notesReducer';
import Notes from './Notes';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes,
        newMessageText: state.notesPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {


    return {
        noteChange: (text) => {
            dispatch(updateNewNoteText(text));
        },
        addNote:() => {
            dispatch(addNoteActionCreator());
        }
    }
}
const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);

export default NotesContainer;