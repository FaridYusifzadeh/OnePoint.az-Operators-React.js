import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const titleStyle = {
      fontSize: "40px"
    };
    const headingLineStyle = {
      content: "",
      display: "flex",
      width: "100px",
      borderRadius: "10px",
      height: "4px",
      background: "#fac819",
      margin: " 20px auto 45px"
    };
    return (
      <div className=" mx-auto col-md-6 col-lg-4 text-center text-capitalaize p-4 mt-5">
        <h2 style={titleStyle}>MKR sorğusu</h2>

        <div style={headingLineStyle}></div>
      </div>
    );
  }
}
