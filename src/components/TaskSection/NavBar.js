import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import axios from "axios";
// import { Switch, Route, Redirect } from "react-router-dom";


export default class NavBar extends Component {

constructor(props){
  super(props)
}

  // Remove exit button
  removeLocalStorage() {
    const my_data = {
      token: localStorage.getItem("user token")
    };

    axios({
      method: "post",
      url: "https://api.onepoint.az/v1/operators/api/logout",

      data: my_data
    }).then(function(response) {
      if (response.data) {
        console.log(response.data);
        localStorage.removeItem("user token");

      }
    });

     localStorage.removeItem("user token");
  }

  render() {
    const navBarStyle = {
      width: "100%",
      height: "65px",
      background: "black",
      display: "flex",
      alignItems: "center"
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
              <Link to="/">
                <ButtonContainer onClick={this.removeLocalStorage}>
                  Çıxış
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}