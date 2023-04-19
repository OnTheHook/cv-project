import React, { Component } from "react";

export default class ExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.state = {
      company: this.props.company,
      title: this.props.title,
      tasks: this.props.tasks,
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
      <form action="#">
        <p>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={this.state.company}
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
              value={this.state.title}
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
              value={this.state.tasks}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <label>
            From:
            <input
              type="date"
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
              type="date"
              name="to"
              value={this.state.to}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
        </p>
        <p>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          <button onClick={(e) => this.props.onDelete(e, this.props.id)}>Delete</button>
        </p>
      </form>
    );

    let final = (
      <div>
       <h2>Company: {this.state.company}</h2>
       <h2>Title: {this.state.title}</h2>
       <h2>Tasks: {this.state.tasks}</h2>
       <h2>From: {this.state.from}</h2>
       <h2>To {this.state.to}</h2>
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