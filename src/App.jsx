import { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import Sidebar from './Sidebar'
import Main from './Main'
import './App.css';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  const onAddNote=()=>{
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updateNoteArray = notes.map((note)=>{
      if(note.id === activeNote) {
        return updatedNote;
      }


      return note;
    });

    setNotes(updateNoteArray);
  };

  const onDeleteNote=(idDelete)=>{
    setNotes(notes.filter((note) => note.id !== idDelete));
  };

  const getActive = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}/>


      <Main activeNote={getActive()} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;
