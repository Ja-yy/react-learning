import { useContext } from "react";
import { NoteContext } from "./NoteContext";

const useNotecontext = () => {
  const note = useContext(NoteContext);
  return note;
};

export default useNotecontext;
