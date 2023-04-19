import React, { Component } from "react";

export default class EducationItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      school: this.props.school,
      diploma: this.props.diploma,
      from: this.props.from,
      to: this.props.to,
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
      <div>
        <form action="#">
          <p>
            <label>
              School:
              <input
                type="text"
                name="school"
                value={this.state.school}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </p>
          <p>
            <label>
              Diploma:
              <input
                type="text"
                name="diploma"
                value={this.state.diploma}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </p>
          <p>
            <label>
              From:
              <input
                type="text"
                name="from"
                value={this.state.from}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </p>
          <p>
            <label>
              To:
              <input
                type="text"
                name="to"
                value={this.state.to}
                onChange={(e) => this.handleChange(e)}
              />
            </label>
          </p>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          <button onClick={(e) => this.props.onDelete(e, this.props.id)}>
            Delete
          </button>
        </form>
      </div>
    );

    let final = (
      <div>
        <h2>School: {this.state.school}</h2>
        <h2>Diploma: {this.state.diploma}</h2>
        <h2>From: {this.state.from}</h2>
        <h2>To: {this.state.to}</h2>
        <button onClick={(e) => this.handleEdit(e)}>Edit</button>
      </div>
    );

    return (
      <div>
        {!this.state.isSubmitted && form}
        {this.state.isSubmitted && final}
      </div>
    );
  }
}
