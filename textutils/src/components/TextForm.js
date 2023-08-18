import React, { useState } from "react";

export default function TextForm(props) {
  const [btntext, setVtnText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to upper case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lower case", "success");
  };

  const handleVlClick = () => {
    let newText = text.match(/[aeiou]/gi)?.length;
    setVtnText(
      `Total number of vowels: ${newText > 0 ? newText : "No Vowels Found"}`
    );
    props.showAlert("Vowel counted", "success");
  };

  const HandleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy created", "success");
  };

  const handleOnChnaged = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChnaged}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleVlClick}
        >
          Count vowels
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Create copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={HandleExtraSpace}
        >
          Remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>{btntext}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it"}</p>
      </div>
    </>
  );
}
