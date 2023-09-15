import React from "react";
import { Modal } from "../../../components/Modal";
import { NoteForm } from "../../../components/NoteForm";

export const EditNoteModal = (props) => {
  return (
    <Modal title="Edit Note" handleOnEdit={props.handleOnEdit}>
      <NoteForm
        currentnote={props.currentnote}
        handleOnChange={props.handleOnChange}
      />
    </Modal>
  );
};
