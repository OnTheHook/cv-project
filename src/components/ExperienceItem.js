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
            Description:
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
        <p>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          <button onClick={(e) => this.props.onDelete(e, this.props.id)}>
            Delete
          </button>
        </p>
      </form>
    );

    let final = (
      <div className="experience--item">
        <div>
          <p>
            {this.state.from} - {this.state.to}
          </p>
        </div>
        <div className="experience--info">
          <p>
            <span className="bold">{this.state.title}</span>
          </p>
          <p>{this.state.company}</p>
          <p>{this.state.tasks}</p>
        </div>
        <p>
          <button onClick={(e) => this.handleEdit(e)}>Edit</button>
        </p>
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
