import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class Skills extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitSkill = this.onSubmitSkill.bind(this);
    this.onDeleteSkill = this.onDeleteSkill.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      skill: {
        text: "",
        id: uuidv4(),
      },
      skills: [],
      isSubmitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
        id: this.state.skill.id,
      },
    });
  };

  onSubmitSkill = (e) => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        text: "",
        id: uuidv4(),
      },
    });
  };

  onDeleteSkill = (e, key) => {
    e.preventDefault();
    const newSkills = this.state.skills.filter(
      (skillItem) => skillItem.id !== key
    );

    this.setState({
      skills: [...newSkills],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: false });
  }

  render() {
    const { skill, skills } = this.state;
    let form = (
      <div>
        <ul>
          {this.state.skills.map((skill) => {
            return (
              <li key={skill.id}>
                {skill.text}
                <button
                  className="skill--delete"
                  onClick={(e) => this.onDeleteSkill(e, skill.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.onSubmitSkill}>
          <label htmlFor="skillInput">Enter Skill: </label>
          <input
            onChange={this.handleChange}
            value={skill.text}
            type="text"
            id="skillInput"
          />
          <button type="submit">Add Skill</button>
        </form>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </div>
    );

    let final = (
      <div>
        <ul>
          {this.state.skills.map((skill) => {
            return <li key={skill.id}>{skill.text}</li>;
          })}
        </ul>
        <button onClick={(e) => this.handleEdit(e)}>Edit</button>
      </div>
    );
    return (
      <div>
      <h2 className="section--title">Skills</h2>
      {!this.state.isSubmitted && form}
      {this.state.isSubmitted && final}
      </div>
    );
  }
}
