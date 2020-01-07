import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";



export default class NavBarİnfo extends Component {
  render() {
    const navBarStyle = {
      width: "100%",
      height: "65px",
      background: "black",
      display: "flex",
      alignItems: "center",
    
    };

    const btnDivStyle = {
      display: "flex",
      justifyContent: "flex-end"
    };
    const logoStyle = {
      display: "flex",
      alignItems: "center"
    };
    return (
      <div style={navBarStyle}>
        <div className="container">
          <div className="row">
            <div style={logoStyle} className="col-3">
              <img
                src="./img/OnePoint_Logo_Full_Dark.png"
                width="auto"
                height="30"
                alt="onepoint"
              />
            </div>
            <div className="col-3"></div>
            <div className="col-3"></div>
            <div style={btnDivStyle} className="col-3">
              <Link to="/task">
                <ButtonContainer >Siyahı</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
