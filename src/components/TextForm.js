import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","info")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","info")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    let clearText = "";
    setText(clearText);
    props.showAlert("Text cleared!","info")
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!","info")
  };

  return (
    <>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "#ffffff" : "#353535",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          value={text}
          placeholder="Enter Text Here"
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        />
      </div>

      <ButtonGroup className="mb-2">
        <Button onClick={handleUpClick} variant={props.mode=== 'light' ? 'outline-dark' : 'outline-light' }> Convert to Uppercase </Button>
        <Button onClick={handleLoClick} variant={props.mode=== 'light' ? 'outline-dark' : 'outline-light' }> Convert to Lowercase </Button>
        <Button onClick={handleClear} variant={props.mode=== 'light' ? 'outline-dark' : 'outline-light' }> Clear Text </Button>
        <Button onClick={handleCopy} variant={props.mode=== 'light' ? 'outline-dark' : 'outline-light' }> Copy Text </Button>
      </ButtonGroup>

      <div
        className="my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.length === 0 ? "0" : text.split(" ").length} Words and{" "}
          {text.length} Characters
        </p>
        <p>
          {text.length === 0 ? "0" : 0.008 * text.split(" ").length} Minutes to
          read
        </p>
        <h2>Preview</h2>
        <p>{!text.length>0 ? 'Enter some text in above text area to preview it here': text }</p>
      </div>
    </>
  );
}
