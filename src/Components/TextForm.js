import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clearded clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  return (
    <>
      <div
        className={`container  text-${
          props.mode === "dark" ? "white" : "#042743"
        }`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode !== "dark" ? "white" : "grey",
            }}
          ></textarea>
        </div>
        <button className="button btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="button btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="button btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="button btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="button btn-primary mx-1" onClick={handleExtraSpaces}>
          Clear Extra Space
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "white" : "#042743"
        }`}
      >
        <h2> Your Text Summary</h2>
        <p>
          {text.split(" ").length}words and {text.length} characters
        </p>
        <p>
          <b>It Will Take You {0.8 * text.split(" ").length} seconds to read</b>
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something Above To Preview It"}</p>
      </div>
    </>
  );
}
