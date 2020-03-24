import React from "react";
import UpdateComponent from "./Update";

function Note({ title, content, onDelete, noteId, onUpdate }) {

  function removeNote(){

    const deleteNote = fetch(`http://localhost:3001/api/delete/${noteId}`,{
      method: 'DELETE'
    }).then(() => onDelete(noteId))
    .catch(err => console.log(err));
  }

  // UPDATE note funciton

  function updateNote() {
    const putMethod = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(title,content)
    }

    const update = fetch(`http://localhost:3001/api/note/${noteId}`, putMethod)
      .then((res) => res.json())
      .then(() => onUpdate(noteId))
      .catch(err => console.log(err))

  }



  return (
    <div className="note">
      <h1 className="post">{title}</h1>
      <p>{content}</p>
      <button onClick={removeNote}>DELETE</button>
      <button className="update" onClick={updateNote}>UPDATE</button>
     {/* <UpdateComponent onUpdate={""} />*/}
    </div>
  );
}

export default Note;
