import React from "react";

export const Modal = (props) => {
  return (
    <div>
      <div
        className="modal"
        id="customModal"
        tabIndex="-1"
        aria-labelledby="customModalLabel"
        aria-hidden="true"
        data-bs-toggle="collapse"
      >
        <div className="modal-dialog  modal-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="customModalLabel">
                {props.title}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer  ">
              <button
                ref={props.refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={props.handleOnEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
