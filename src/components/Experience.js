import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.handleAddExperience = this.handleAddExperience.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.state = {
      experience: [
        {
          key: uuidv4(),
          company: "",
          title: "",
          tasks: "",
          from: "",
          to: "",
        },
      ],
    };
  }

  handleAddExperience(e) {
    e.preventDefault();
    this.setState({
      experience: [
        ...this.state.experience,
        {
          key: uuidv4(),
          company: "",
          title: "",
          tasks: "",
          from: "",
          to: "",
        },
      ],
    });
  }


  handleDeleteExperience(e, key) {
    e.preventDefault();
    const newExperience = this.state.experience.filter(
      (experienceItem) => experienceItem.key !== key
    );

    this.setState({
      experience: [...newExperience],
    });
  }

  render() {
    const experienceItems = this.state.experience.map((experienceItem) => {
      return (
        <ExperienceItem
          key={experienceItem.key}
          id={experienceItem.key}
          company={experienceItem.company}
          title={experienceItem.title}
          tasks={experienceItem.tasks}
          from={experienceItem.from}
          to={experienceItem.to}
          onDelete={this.handleDeleteExperience}
        />
      );
    });

    return (
      <div>
        <h1>Experience</h1>
        <button onClick={this.handleAddExperience}>
          Add Work Experience
        </button>
        {experienceItems}
      </div>
    );
  }


}


