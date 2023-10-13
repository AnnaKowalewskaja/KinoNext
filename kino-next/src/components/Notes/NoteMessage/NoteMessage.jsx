
import styles from './NoteMessage.module.css';

const NoteMessage = (props) => {


    return (<div className={`${styles.notes__text}`}>
       {props.messages.join('. ')}
        </div>
    )
}

export default NoteMessage;