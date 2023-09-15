import React from "react";
import useNotecontext from "../../../context/notes/usenoteContext";
import { Card } from "../../../components/Card";

export const Noteitems = (props) => {
  const { deleteNote } = useNotecontext();
  const { note, updateNote } = props;
  const HndleDeleteClick = () => {
    deleteNote(note._id);
  };

  return (
    <div className="col-md-3 my-3 ">
      <Card  note={note} >
        <i className="fa-solid fa-trash mx-2" onClick={HndleDeleteClick}></i>
        <i
          className="fa-solid fa-edit mx-2"
          data-bs-toggle="modal"
          data-bs-target="#customModal"
          onClick={() => {
            updateNote(note);
          }}
        ></i>
      </Card>
    </div>
  );
};
