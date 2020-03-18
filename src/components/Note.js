import React from "react";

function Note({ title, content, onDelete, id }) {

  function deleteItem() {
    onDelete(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={deleteItem}>DELETE</button>
    </div>
  );
}

export default Note;
