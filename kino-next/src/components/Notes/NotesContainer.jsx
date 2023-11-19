import { addNote, updateNewNoteText } from "../../redux/notesReducer";
import Notes from "./Notes";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    notes: state.notesPage.notes,
    newMessageText: state.notesPage.newMessageText,
  };
};
const NotesContainer = connect(mapStateToProps, { addNote, updateNewNoteText })(
  Notes
);
export default NotesContainer;
