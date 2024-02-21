import { createContext, useState } from "react";

export const NoteContext = createContext({});

const NoteProvider = (props) => {
  const host = "http://localhost:8000";

  const noteint = [];

  const [notes, setNotes] = useState(noteint);
  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/v1/notes/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZlZTlhNjJhNjI2Y2NkZmMzODU4YTEiLCJleHBpcmVzIjoxNjk0ODQ0NzY3LjE0NzE4MTV9.YiLPFOASDBpgYqqd-NRZaRVfzJ2XV4Eih18MDvKWZhA",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // add note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/v1/notes/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZlZTlhNjJhNjI2Y2NkZmMzODU4YTEiLCJleHBpcmVzIjoxNjk0ODQ0NzY3LjE0NzE4MTV9.YiLPFOASDBpgYqqd-NRZaRVfzJ2XV4Eih18MDvKWZhA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log("this note added res", note);
    setNotes(notes.concat(note));
  };

  // edit note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/v1/notes/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZlZTlhNjJhNjI2Y2NkZmMzODU4YTEiLCJleHBpcmVzIjoxNjk0ODQ0NzY3LjE0NzE4MTV9.YiLPFOASDBpgYqqd-NRZaRVfzJ2XV4Eih18MDvKWZhA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  //delete note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/v1/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "applicauion/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZlZTlhNjJhNjI2Y2NkZmMzODU4YTEiLCJleHBpcmVzIjoxNjk0ODQ0NzY3LjE0NzE4MTV9.YiLPFOASDBpgYqqd-NRZaRVfzJ2XV4Eih18MDvKWZhA",
      },
    });
    const json = JSON.stringify(response);
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
