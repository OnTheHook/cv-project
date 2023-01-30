import React, { Component } from "react";

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        company: "",
        title: "",
        tasks: [],
        start: "",
        finish: "",
        edit: false,
      },

      experiences: [],
    };
  }

  handleChange(e) {
    e.preventDefault();
    const label = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [label]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        edit: false,
      },
    }));
  }

  handleDelete(e, index) {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.filter((_, i) => i !== index),
    });
  }

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        company: "",
        title: "",
        tasks: [],
        start: "",
        finish: "",
        edit: false,
      },
    });
  };
  
  render() {
    let form = (
      <form action="#">
        <p>
          <label>
            Company:
            <input
              type="text"
              name="company"
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            Tasks:
            <input
              type="text"
              name="tasks"
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            From:
            <input
              type="date"
              name="start"
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            To:
            <input
              type="date"
              name="finish"
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <button>Submit</button>
        </p>
      </form>
    );

    return (
      <div>
        <h1>Work Experience</h1>
        {form}
        <button>Add Work Experience</button>
      </div>
    );
  }
}
