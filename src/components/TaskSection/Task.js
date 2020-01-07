import React, { Component } from "react";
import "./style.css";
import NavBar from "./NavBar";
import Title from "./Title";
import AddTask from "./AddTask";

export default class Task extends Component {
  render() {
      const divStyle = {
      position: "absolute",
      width: "100%",
        zIndex: "5"
    };
    return (
      <React.Fragment>
        <div style={divStyle} className="task_section">
          <NavBar />
          <Title />
          <AddTask />

        </div>
      </React.Fragment>
    );
  }
}
