import React, { useRef } from 'react'
import nstyles from '../styles/EnterNote.module.css'
import { add } from './Audio'
function EnterNote(props) {
    const title = useRef();
    const content = useRef();
    const color = useRef();
    function appendNote() {
        const t = title.current.value;
        const c = content.current.value;
        const col = color.current.value;
        if (t.trim() === '' || c.trim() === '') {
            alert('Enter something!')
            return;
        }
        props.addnote({ Title: t, Content: c, time: (new Date().toLocaleString()), color: col });
        title.current.value = content.current.value = '';
        add.play();
    }
    return (
        <>
            <div className={nstyles.note}>
                <h2>Want to note something?</h2>
                <input className={nstyles.color} type="color" ref={color} title='select color'/>
                <input ref={title} placeholder='Enter title' type="text" />
                <textarea ref={content} placeholder='Enter Note' ></textarea>
                <button onClick={appendNote}>Add Note</button>
            </div>
        </>
    )
}

export default EnterNote
