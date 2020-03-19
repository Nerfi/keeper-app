import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  //adding note to the notes array
  function handleAdd(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }


  //delete item
  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) =>{
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleAdd} />

    { notes.map((note, index) => {
       return <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
        />
    }) }

      <Footer />
    </div>
  );
}

export default App;
