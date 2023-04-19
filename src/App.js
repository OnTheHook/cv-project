import React, { Component } from "react";
import "./styles/App.css";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills"; 
import Experience from "./components/Experience";

class App extends Component {

  render() {
    return (
      <div>
        <Profile />
        <Experience />
        <Education />
        <Skills />
      </div>
    );
  }
}

export default App;
