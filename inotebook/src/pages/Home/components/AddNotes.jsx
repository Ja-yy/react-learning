import React, { useState } from "react";
import useNotecontext from "../../../context/notes/usenoteContext";
import { NoteForm } from "../../../components/NoteForm";
import { Button } from "../../../components/Button";

export const AddNotes = () => {
  const { addNote } = useNotecontext();

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleOnClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add a Note</h2>
      <NoteForm handleOnChange={handleOnChange} currentnote={note}>
        <Button type="submit" color="dark" handleOnClick={handleOnClick}>
          Add Note
        </Button>
      </NoteForm>
    </div>
  );
};
