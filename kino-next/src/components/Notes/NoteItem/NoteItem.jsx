import styles from './NoteItem.module.css';
import { Link } from 'react-router-dom';


const NoteItem = (props) => {

    return (
        
        <Link to ={'/notes/'+ props.id}>{props.title}</Link>
    )
}

export default NoteItem;