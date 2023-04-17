import React, { Component } from "react";
import "./styles/App.css";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills"; 
import WorkExperience from "./components/WorkExperience";

class App extends Component {

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
