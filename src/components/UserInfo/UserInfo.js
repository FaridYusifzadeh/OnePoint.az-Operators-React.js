import React, { Component } from "react";
import NavBarİnfo from "./NavBar";
import Title from "./Title";
import TableInfo from "./TableInfo/TableInfo";

class UserInfo extends Component {
  render() {
    const divStyle = {
      position: "relative",
      width: "100%",
      height: "120vh",
      background: "white",
      zIndex: "8"
    };
    return (
      <div style={divStyle}>
        <NavBarİnfo />
        <Title />
        <TableInfo />
      </div>
    );
  }
}

export default UserInfo;
