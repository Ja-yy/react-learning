import React from "react";

export const NoteForm = (props) => {
  const {
    currentnote = { title: null, description: null, tag: null },
    handleOnChange,
  } = props;

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="titleInput"
            name="title"
            value={currentnote.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descInput" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="descInput"
            name="description"
            value={currentnote.description}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagInput" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tagInput"
            name="tag"
            value={currentnote.tag}
            onChange={handleOnChange}
          />
        </div>
        {props.children}
      </form>
    </div>
  );
};
