import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import { ButtonContainer } from "./LoginButton";
import axios from "axios";
import {  Redirect } from "react-router-dom";
// import ls from "local-storage";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      userValue: "",
      hidden: true,
      passwordValue: "",
      iconShowHide: "./img//hide.png",
      errorMessage: "",
      isSignedUp: false
      // endpoint: "https://operators.onepoint.az",
      // data: []
    };

    //
    this.clickButton = this.clickButton.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  logged = () => {
    const token = localStorage.getItem("user token");
    if (token === null) {
      return false;
    }
    return true;
  };

  handleChangeUserName(event) {
    this.setState({ userValue: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ passwordValue: event.target.value });
  }

  clickButton(e) {
    if (this.state.userValue === "" || this.state.passwordValue === "") {
      this.setState({ errorMessage: "Xanaları boş saxlamayın" });
      // return <Redirect to="/" />;
    } else {
      this.setState({ errorMessage: "" });

      axios
        .post(`you url`, {
          fin_code: this.state.userValue,
          password: this.state.passwordValue
        })
        .then(response => {
          const persons = response.data;

          if (response !== undefined) {
            if (response.data.token) {
              localStorage.setItem("user token", response.data.token);
              this.setState({ isSignedUp: true });
              window.location.reload();
            }
          }
        })

        .catch(response => {
          this.setState({ errorMessage: response.response.data.message });
          return <Redirect to="/" />;
        });
    }
  }
  componentDidMount() {
    if (this.props.passwordValue) {
      this.setState({ passwordValue: this.props.passwordValue });
    }
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });

    if (this.state.iconShowHide === "./img//hide.png") {
      this.setState({ iconShowHide: "./img//show.png" });
    } else {
      this.setState({ iconShowHide: "./img//hide.png" });
    }
  }

  render() {
    const loginDivStyle = {
      width: "377px",
      height: "auto",
      background: "white",
      zIndex: 2,
      position: "relative",
      padding: " 45px 30px 30px",
      boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
      borderRadius: "10px"
    };
    const headingStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: "0",
      padding: "0",
      border: "0",
      borderCollapse: "collapse",
      borderSpacing: "0",
      flex: "none"
    };
    const headingLine = {
      content: "",
      display: "flex",
      width: "100px",
      borderRadius: "10px",
      height: "4px",
      background: "#fac819",
      margin: " 20px auto 45px"
    };

    const inputStyle = {
      width: "311px"
    };

    const paragraphStyle = {
      textAlign: "center",
      color: "#555",
      lineHeight: 1.8,
      fontSize: "18px",
      margin: "-5px"
    };

    const errorPassStyle = {
      color: "red",
      fontSize: "18px",
      height: " 21px"
    };

    const showHideDivIconStyle = {
      position: "absolute",
      width: "40px",
      height: " 40px",
      borderRadius: "50%",
      marginTop: "-44px",
      marginLeft: "260px",
      zIndex: "10",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      backround: "red",
      cursor: "pointer"
    };

    const showHideIconStyl = {
      width: "25px",
      height: "25px",
      position: "absolute",
      marginTop: "15px",
      marginLeft: "5px",
      cursor: "pointer"
    };

    if (this.state.isSignedUp) {
      return <Redirect to={{ pathname: "/task" }} />;
    }

    return (
      <div className="login_section">
        <div className="overlay"></div>

        <div className="container">
          <div className="mx-auto col-md-6 col-lg-4 text-center text-capitalaize p-4 mt-5">
            <div style={loginDivStyle}>
              <div style={headingStyle} className="heading">
                <h1>Bank operatoru</h1>
                <div style={headingLine} className="heading-line"></div>
                <div style={errorPassStyle} className="error_pass">
                  {this.state.errorMessage}
                </div>
              </div>
              <div className="group mt-4 text-left">
                <TextField
                  style={inputStyle}
                  value={this.state.userValue}
                  onChange={this.handleChangeUserName}
                  type="text"
                  id="standard-basic"
                  label="FIN *"
                  color="primary"
                />
              </div>
              <div className="group mt-2 text-left">
                <TextField
                  style={inputStyle}
                  value={this.state.passwordValue}
                  onChange={this.handleChangePassword}
                  type={this.state.hidden ? "password" : "text"}
                  value={this.state.passwordValue}
                  onChange={this.handleChangePassword}
                  id="standard-ba"
                  label="Password"
                  color="primary"
                />
              </div>

              <div style={showHideDivIconStyle}>
                <img
                  onClick={this.toggleShow}
                  style={showHideIconStyl}
                  src={this.state.iconShowHide}
                />
              </div>

              <div className="text-center mt-3">
                {/* <Link to= refresh="true"> */}
                <ButtonContainer
                  className="mt-4"
                  cart
                  onClick={this.clickButton}
                >
                  DAXIL OL
                </ButtonContainer>
                {/* </Link> */}
              </div>

              <div className="text-center mt-3" style={paragraphStyle}>
                <p style={{ margin: " 0 0 15px" }}>
                  Şəxsiyyət vəsiqənizin FİN kodunu və sizə təqdim olunmuş
                  şifrəni qeyd edin. Şifrəni unutduğunuz halda Onepoint.az
                  əməkdaşlarına müraciət edin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
