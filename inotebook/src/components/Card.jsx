import React from "react";
import PropTypes from "prop-types";

export const Card = ({ note, className, children }) => {
  const title = note && note.title ? note.title : "";
  const description = note && note.description ? note.description : "";

  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{title}</h5>
          {children}
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  className: PropTypes.string,
  children: PropTypes.node,
};
