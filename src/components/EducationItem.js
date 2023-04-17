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
        <h1>Education</h1>
        <form action="#">
          <p>
            <label>
              School:
              <input type="text" name="school" value={this.state.school} />
            </label>
          </p>
          <p>
            <label>
              Diploma:
              <input type="text" name="title" value={this.state.education} />
            </label>
          </p>
          <p>
            <label>
              From:
              <input type="date" name="from" value={this.state.from} />
            </label>
          </p>
          <p>
            <label>
              To:
              <input type="date" name="from" value={this.state.from} />
            </label>
          </p>
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.props.onDelete(this.props.id)}>Delete</button>
        </form>
      </div>
    );

    let final = (
      <div>
        <h2>School: {this.state.school}</h2>
        <h2>Diploma: {this.state.diploma}</h2>
        <h2>Graduation: {this.state.graduation}</h2>
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
