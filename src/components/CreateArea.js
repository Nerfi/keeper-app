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
    //here I should create the create note and call the API
      e.preventDefault();
    const {title, content} = notes;

        if(title.length > 0 && content){
          setNotes({
            title: "",
            content: ""
          });

          // the prop we send from the parent is call addNote, therefore in order to use that function in this component, since that function acepts a parameter
          //the parameter I'll revice is the new note, in this case a whole bunch of notes, that are added trought the newState function.
          addNote(notes);
        }else {
          alert("you need to typed in something");
        }
    //here we're just cleaning up the function, after the button gets click isTouch will come back to it's inital state: false.
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
