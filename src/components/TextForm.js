import React, { useState } from "react";

//import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState("Enter The Text Here");
  const handleClick = () =>{
    console.log("UpperCase was clicked")
    setText("Click Done");
  }
  const handleOnChange = (event) =>{
    console.log("handleOnChange was clicked")
    setText(event.target.value);
  }
  //setText("Enter Text");
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="myBox" className="form-label">
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
          <label for="exampleInputPassword1" className="form-label">
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
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
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
  );
}
