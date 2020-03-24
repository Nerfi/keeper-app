import React,{useState} from "react";

const UpdateComponent = ({onUpdate, noteId}) => {
  //setting state
  const [update,setUpdate] = useState({
      title: "",
      content: ""
    });
  //the button update has not been touch as default
  const [touchUpdate, setTouch] = useState(false);

 function updateNote(e) {

  const {name, value}  = e.target;

  setUpdate(prevNotes => {
    return {
      ...prevNotes,
      [name]: value
    }
  });

}
 function handleUpdate() {
    setTouch(!touchUpdate);

  }

  const NewComponent = () => {
    return(
       <div>
       <form className="update-note">

          <input
             name="title"
             placeholder="Title"
             required
             onChange={updateNote}
             value={update.title}

           />

          <textarea
            name="content"
            placeholder="Take a note..."
            rows={"2"}
            onChange={updateNote}
            value={update.content}

          />

       </form>
      </div>
      )
  }

  return(


    <div className="update">

    {touchUpdate ? <NewComponent value={updateNote}/> : <button onClick={handleUpdate}>UPDATE</button> }


    </div>

  )


}

export default UpdateComponent;


