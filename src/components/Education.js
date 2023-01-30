import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        <form action="#">
          <p>
            <label>
              School:
              <input type="text" name="school" />
            </label>
          </p>
          <p>
            <label>
              Diploma:
              <input type="text" name="title" />
            </label>
          </p>
          <p>
            <label>
              Graduation:
              <input type="date" name="tasks" />
            </label>
          </p>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
