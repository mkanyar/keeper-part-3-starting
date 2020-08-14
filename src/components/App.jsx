import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);
  function addNote(note) {
    setArr((prevArr) => {
      return [...prevArr, note];
    });
  }
  function deleteNote(indexToBeDeleted) {
    setArr((prevArr) => {
      return prevArr.filter((item, index) => {
        return index !== indexToBeDeleted;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {arr.map((note, index) => {
        return (
          <Note
            onDelete={deleteNote}
            id={index}
            key={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
