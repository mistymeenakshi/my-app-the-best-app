import React from "react";
//import PropTypes from 'prop-types';

export default function TextForm(props) {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="myBox" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="myBox"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
           {props.heading}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
