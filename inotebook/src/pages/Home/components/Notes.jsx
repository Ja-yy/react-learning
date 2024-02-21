import React, { useEffect, useState } from "react";
import useNotecontext from "../../../context/notes/usenoteContext";
import { Noteitems } from "./Noteitems";
import { AddNotes } from "./AddNotes";
import { EditNoteModal } from "./EditNoteModal";

export const Notes = () => {
  const { notes, getNotes, editNote } = useNotecontext();

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });

  const updateNote = (currentNote) => {
    setNote({
      _id: currentNote._id,
      title: currentNote.title,
      description: currentNote.description,
      tag: currentNote.tag,
    });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleEditClick = (e) => {
    editNote(note._id, note.title, note.description, note.tag);
  };

  return (
    <>
      {/* <ToggleNote/> */}
      <AddNotes />
      <EditNoteModal
        title="Edit Note"
        handleOnEdit={handleEditClick}
        currentnote={note}
        handleOnChange={onChange}
      />
      <div className="row my-3">
        <h2>You Notes</h2>
        {notes.map((note) => {
          return (
            <Noteitems key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
