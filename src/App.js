import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  //testing the API
  const [fakeNotes, setFakeNotes] = useState([]);

  //fetching the fake data to see if it works.
  async function fetchData(){
    const fakeData = await fetch('http://localhost:8000/notes');
    const response =  await fakeData.json();
    setFakeNotes(response);
  }

  //adding useEffect hook once the component mounted.
  useEffect(() => {
    fetchData();
  },[])

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

  function deleteNotes(id){
    setFakeNotes(prevNotes => {
        return prevNotes.filter((item, index) => {
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
