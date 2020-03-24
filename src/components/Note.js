import React from "react";
import UpdateComponent from "./Update";

function Note({ title, content, onDelete, noteId }) {

  function removeNote(){

    const deleteNote = fetch(`http://localhost:3001/api/delete/${noteId}`,{
      method: 'DELETE'
    }).then(() => onDelete(noteId))
    .catch(err => console.log(err));
  }


  return (
    <div className="note">
      <h1 className="post">{title}</h1>
      <p>{content}</p>
      <button onClick={removeNote}>DELETE</button>
      <UpdateComponent />
    </div>
  );
}

export default Note;
