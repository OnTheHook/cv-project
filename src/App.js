import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills"; 
import Experience from "./components/Experience";

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <Profile />
          <Experience />
          <Education />
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
