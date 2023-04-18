import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
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
    const value = e.target.value;
    this.setState({
      description: value,
    });
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
            First Name:
            <input
              type="text"
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e)}
              name="firstName"
            />
          </label>
        </p>
        <p>
          <label>
            Last Name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e)}
              name="lastName"
            />
          </label>
        </p>
        <p>
          <label>
            Address:
            <input
              type="text"
              value={this.state.address}
              onChange={(e) => this.handleChange(e)}
              name="address"
            />
          </label>
        </p>
        <p>
          <label>
            Email:
            <input
              type="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
              name="email"
            />
          </label>
        </p>
        <p>
          <label>
            Phone:
            <input
              type="tel"
              value={this.state.phone}
              onChange={(e) => this.handleChange(e)}
              name="phone"
            />
          </label>
        </p>
        <p>
          Description:
          <textarea
            cols="100"
            rows="20"
            onChange={(e) => this.handleTextAreaChange(e)}
            value={this.state.description}
          ></textarea>
        </p>

        <button
          className="profile--submit"
          onClick={(e) => this.handleSubmit(e)}
        >
          Submit
        </button>
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

export default Profile;
