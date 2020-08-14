import React from "react";

function Note(props) {
  function removeNote() {
    // Takes the id from the app component
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={removeNote}>DELETE</button>
    </div>
  );
}

export default Note;
