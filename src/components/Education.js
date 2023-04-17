import React, { Component } from "react";
import EducationItem from "./EducationItem";
import { v4 as uuidv4 } from "uuid";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.state = {
      education: [],
    };
  }

  handleAddEducation(e) {
    e.preventDefault();
    this.setState({
      education: [
        ...this.state.education,
        {
          // key: uuidv4(),
          school: "",
          diploma: "",
          from: "",
          to: "",
        },
      ],
    });
  }

  handleDeleteEducation(key) {
    const newEducation = this.state.education.filter(
      (educationItem) => educationItem.key !== key
    );
    
    this.setState({
      education: [...newEducation],
    });
  }

  render() {
    const educationItems = this.state.education.map((educationItem) => {
      return (
        <EducationItem
          // id={educationItem.key}
          school={educationItem.school}
          diploma={educationItem.diploma}
          from={educationItem.from}
          to={educationItem.to}
          onDelete={this.handleDeleteEducation}
        />
      );
    });
    return (
      <div>
        <button onClick={this.handleAddEducation}>
          Add Education Experience
        </button>
        {educationItems}
      </div>
    );
  }
}
