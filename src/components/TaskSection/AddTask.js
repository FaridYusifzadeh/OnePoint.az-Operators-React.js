import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { DatasConsumer } from "../../context";
import axios  from "axios";
import { Redirect } from "react-router-dom";


export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: [],
       isSignedUp: false,
    };
  }

  uncompleted() {
     var self = this;
    var my_data = {
      token: localStorage.getItem("user token")
    };
    axios({
      method: "post",
      url: "you url",
      // url: "http://0.0.0.0:8010/api/notcompleted",
      data: my_data
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        if (error.response.status === 401) {
          localStorage.removeItem("user token");
          // return <Redirect to={{ pathname: "/" }} />;
        } else if (error.response.status === 404) {
        }
      });
  }

  componentDidMount() {
    this.uncompleted();
  }

  render() {
     if (this.state.isSignedUp) {
      return <Redirect to={{ pathname: "/task" }} />;
    }
    return (
      <div className="container">
        <div className="mx-auto col-md-8 col-lg-6 text-center text-capitalaize p-4 ">
          <DatasConsumer>
            {value => (
              <div>
                {value.data.map((item, index) => (
                  <Link
                    to={index === 0 ? "/userinfo" : ""}
                    key={item.id}
                    style={{ paddingLeft: 13, textDecoration: "none" }}
                  >
                    <div
                      key={item.id}
                      className={
                        index === 0 ? "users_cards  " : "disabled mt-4"
                      }
                      id={index}
                    >
                      <ul key={item.id} ref={this.myRef}>
                        <li>{item.name}</li>
                        <li>{item.surname}</li>
                        <li>{item.paternal_name}</li>
                        <li>{item.fin_code}</li>
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </DatasConsumer>
        </div>
      </div>
    );
  }
}
