import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);
  //fetching all the notes, working
  async function fetchData() {
    const res = await fetch('http://localhost:3001/api/notes');
    res
      .json()
      .then(res => setNotes(res.data))
      .catch(err => console.log(err));
  }

   useEffect(() => {
     fetchData();
   },[]);



  //adding note to the notes array
  function handleAdd(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }


  //delete item
  async function deleteNote(id){
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
        id={index.id}
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
