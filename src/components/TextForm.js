import React, { useState } from "react";

//import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Enter The Text Here");
  const handleClickUpperCase = () => {
    //console.log("UpperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
  //  document.title='UpperCase';
  };
  const handleClickLowerCase = () => {
    //console.log("UpperCase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success")
   // document.title='KLowerCase';
  };
  const handleOnChange = (event) => {
    // console.log("handleOnChange was clicked")
    setText(event.target.value);
    //props.showAlert("Converted to HandleChanged!", "success")
  };
  //setText("Enter Text");
  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="myBox" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              {props.heading}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary mx-1"
            onClick={handleClickUpperCase}
          >
            Submit For Upper Case
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-2"
            onClick={handleClickLowerCase}
          >
            Submit For Lower Case
          </button>
          {/* <button id="button1" onclick="getPositionXY(this) + my-3">
          Convert to UpperCase
        </button>

        <button id="button2" onclick="getPositionXY(this)">
          Convert to LowerCase
        </button>

        <br></br>
        <button id="button3" onclick="getPositionXY(this)">
          Convert to a Language
        </button> */}

          {/* <button className="my-button" height="300" width="300" style={{float: 'left'}} />
        <button className="my-button" height="300" width="300" style={{float: 'left'}} />
        <button className="my-button" height="300" width="300" style={{float: 'left'}} />
        <button className="my-button" height="300" width="300" style={{float: 'left'}} /> */}
        </form>
      </div>
      <div className="container my-3">
        <h1>Your Text's Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
