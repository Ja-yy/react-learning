import React from "react";

export const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`btn btn-${props.color || "dark"} ${props.classExtra || ""}`}
      onClick={props.handleOnClick}
    >
      {props.children}
    </button>
  );
};
