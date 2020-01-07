import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/LoginSection/Login";
import Task from "./components/TaskSection/Task";
import UserInfo from "./components/UserInfo/UserInfo";

class App extends Component {
  logged = () => {
    const token = localStorage.getItem("user token");
    if (token === null) {
      return false;
    }
    return true;
  };

  render() {
    const LoggedRout = ({ component: Components, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.logged() === true ? (
            <Components {...props} />
          ) : (
            <Login path="/" />
          )
        }
      />
    );

    return (
      <div>
        <React.Fragment>
          <BrowserRouter>
            <LoggedRout component={Task}></LoggedRout>
            <Route path="/userinfo" component={UserInfo}></Route>
          </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}
export default App;
