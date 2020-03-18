import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea({ addNote }) {
  //adding state to check when the user click on 'take note'
  const [isTouch, setTouch] = useState(false);
  // setting initial state
  const [notes, setNotes] = useState({
    title: "",
    content: ""
  });

function newState(e) {
  const {name, value}  = e.target;
  setNotes(prevNotes => {
    return {
      ...prevNotes,
      [name]: value
    }
  });

}

  function addNotes(e){

    const {title, content} = notes;

    e.preventDefault();

    if(title.length > 0 && content){
      setNotes({
        title: "",
        content: ""
      });
      addNote(notes);
    }else {
      alert("you need to typed in something");
    }

    setTouch(!isTouch);

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
