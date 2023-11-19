import styles from "./NoteMessage.module.css";

const NoteMessage = ({ messages }) => {
  return <div className={styles.notes__text}>{messages.join(". ")}</div>;
};

export default NoteMessage;
