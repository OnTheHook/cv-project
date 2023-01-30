import React, { Component } from "react";

export default class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Skills</h1>
        <form action="#">
          <p>
            <label>
              Skills:
              <input type="text" name="company" />
            </label>
          </p>
        </form>
      </div>
    );
  }
}