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
      <div className="container">
        <Header />
        <div className="main">
          <Profile />
          <Education />
          <Experience />          
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
