import React, { Component } from "react";

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Work Experience</h1>
        <form action="#">
          <p>
            <label>
              Company:
              <input type="text" name="company" />
            </label>
          </p>
          <p>
            <label>
              Title:
              <input type="text" name="title" />
            </label>
          </p>
          <p>
            <label>
              Tasks:
              <input type="text" name="tasks" />
            </label>
          </p>
          <p>
            <label>
              From:
              <input type="date" name="email" />
            </label>
          </p>
          <p>
            <label>
              To:
              <input type="date" name="phone" />
            </label>
          </p>
        </form>
      </div>
    );
  }
}
