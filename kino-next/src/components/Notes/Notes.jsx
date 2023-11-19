import React from "react";
import NoteItem from "./NoteItem/NoteItem";
import styles from "./Notes.module.css";
import NoteMessage from "./NoteMessage/NoteMessage";

const Notes = ({ updateNewNoteText, notes, newMessageText, addNote }) => {
  const onNoteChange = (event) => {
    updateNewNoteText(event.target.value);
  };
  return (
    <div>
      <section className={styles.notes}>
        <div className={styles.notes__titles}>
          {notes.map((el) => (
            <NoteItem id={el.id} title={el.title} key={el.id} />
          ))}
        </div>
        <div className={styles.notes__titles}>
          {notes.map((el) => (
            <NoteMessage id={el.id} messages={el.messages} key={el.id} />
          ))}
          <textarea
            value={newMessageText}
            onChange={onNoteChange}
            className={styles.notes_area}
            name="add note"
            id="add-note"
            cols="30"
            rows="3"
          />
          <button className={styles.notes__add} onClick={addNote}>
            Add note
          </button>
        </div>
      </section>
    </div>
  );
};

export default Notes;
