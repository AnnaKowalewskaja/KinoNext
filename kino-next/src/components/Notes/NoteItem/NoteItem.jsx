import styles from './NoteItem.module.css';
import { Link } from 'react-router-dom';


const NoteItem = (props) => {


    return (

        <Link>{props.title}</Link>
    )
}

export default NoteItem;