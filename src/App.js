import React, { Component } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills"; 
import WorkExperience from "./components/WorkExperience";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile />
        <WorkExperience />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default App;
