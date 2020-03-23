import React, { useState,useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea({ addNote }) {
  //adding state to check when the user click on 'take note'
  const [isTouch, setTouch] = useState(false);
  // setting initial state
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

// in this function what we're doing is just taking the user input and added it to our notes object.
 function newState(e) {

  const {name, value}  = e.target;

  setNotes(prevNotes => {
    return {
      ...prevNotes,
      [name]: value
    }
  });

}

  async function addNotes(e){

    const {title, content} = notes;
    //adding code for a POST request
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, content: content })
    };

    const newData =  fetch('http://localhost:3001/api/note', requestOptions)
        .then(response => response.json())
        .then(data => setNotes(data.id))
        .catch(err => console.log(err));

        if(!title || !content){
          alert("you need to provide a title or a content");
          e.preventDefault();
        }
      // the prop we send from the parent is call addNote, therefore in order to use that function in this component, since that function acepts a parameter
      //the parameter I'll revice is the new note, in this case a whole bunch of notes, that are added trought the newState function.
      addNote(notes);
    //here we're just cleaning up the function, after the button gets click isTouch will come back to it's inital state: false.
    setTouch(!isTouch);
    e.preventDefault();

  }



  function touched(){
    setTouch(!isTouch);

  }

  return (
    <div>
      <form className="create-note">

          <input
           name="title"
           placeholder="Title"
           onChange={newState}
           value={notes.title}
          onClick={touched}

         />

        {isTouch &&
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isTouch ? 3 : 1}
          onChange={newState}
          value={notes.content}

        />
      }


        <button onClick={addNotes}> <AddIcon/> </button>

      </form>
    </div>
  );
}

export default CreateArea;
