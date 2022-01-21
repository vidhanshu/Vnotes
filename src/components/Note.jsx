import React from 'react'
import deleteIcon from '../images/delete.svg'
import done from '../images/done.svg'
import gdone from '../images/gdone.png'
import notesStyles from '../styles/Note.module.css'
import { complete } from './Audio'
function Note(props) {
    let { title, time, content, index, color } = props;
    const [Time, setTime] = React.useState(new Date().toLocaleString());
    const Done = React.useRef();


    function deleteTheNode(idx) {
        const result = window.confirm('do you really want to delete it?');
        result && props.deletenote(idx);
    }
    function hogaya() {
        if (Done.current.src.indexOf('gdone') !== -1) {
            Done.current.src = done;
            setTime(time);
        } else {
            Done.current.src = gdone;
            time += " Done at " + (new Date()).toLocaleString();
            setTime(time);
            complete.play();
            console.log(color)
        }
    }
    return (
        <>
            <div className={notesStyles.note}>
                <div className={notesStyles.sidebar} style={{ background: `${color}`}}></div>
                <div className={notesStyles.dot} style={{ background: `${color}`}}> </div>
                <h1>{title}</h1>
                <span>{Time}</span>
                <p>{content}</p>
                <div className={notesStyles.btn}>
                    <img onClick={() => deleteTheNode(index)} src={deleteIcon} alt="delete icon" />
                    <img src={done} ref={Done} alt="done icon" onClick={hogaya} />
                </div>
            </div>
        </>

    )
}

export default Note
