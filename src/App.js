import React, { useState } from 'react'
import './styles/global.css'
import Header from './components/Header'
import Footer from './components/Footer'
import EnterNote from './components/EnterNote'
import Note from './components/Note'
import { delet } from './components/Audio'
function App() {
    const [Notes, setNotes] = useState([]);
    const [idx, setIdx] = React.useState(0);



    function addNote(data) {
        setIdx(prev => prev + 1);
        setNotes(
            (oldData) => {
                return [...oldData, { ...data, index: idx }]
            }
        )
    }


    function deleteNote(coming_idx) {
        let cur = Notes;
        console.log(coming_idx);
        cur.splice(coming_idx, 1);
        console.log(cur);
        for (let i = coming_idx; i < Notes.length; i++) {
            cur[i].index -= 1;
        }
        setNotes([...cur]);
        setIdx(prev => prev - 1);
        delet.play();
    }


    return (
        <>
            <div>
                <Header />
                <div className="main-container">
                    <EnterNote length={Note.length} addnote={addNote} />
                    <div className="notes">
                        {
                            Notes.map((e, index) => {
                                return (
                                    <Note deletenote={deleteNote} key={index} index={e.index} title={e.Title} content={e.Content} time={e.time} color={e.color} />
                                )
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
