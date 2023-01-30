import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phone: "",
      description: "",
      isSubmitted: false,
    };
  }

  handleChange(e) {
    e.preventDefault();
    const label = e.target.name;
    const value = e.target.value;
    this.setState({
      [label]: value,
    });
  }

  handleTextAreaChange(e) {
    e.preventDefault();
    const value = e.target.value
    this.setState({
      description: value
    })

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({ isSubmitted: false });
  }

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

    let final = (
      <div>
        <h2>
          {this.state.firstName} {this.state.lastName}
        </h2>
        <p>{this.state.description}</p>
        <p>
          Telephone: {this.state.phone} Email: {this.state.email}
        </p>
        <p>Address: {this.state.address} </p>
        <button onClick={(e) => this.handleEdit(e)}>Edit</button>
      </div>
    );
    return (
      <div>
        <h1>Profile</h1>
        {!this.state.isSubmitted && form}
        {this.state.isSubmitted && final}
      </div>
    );
  }
}

export default Experience;
