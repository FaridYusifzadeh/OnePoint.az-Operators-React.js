import React, { Component } from "react";
import "./TableInfo.css";
import { ButtonContainer } from "../Button";
// import { connect } from "../../../SocketData";
import { DatasConsumer } from "../../../context";
import { Redirect } from "react-router-dom";
import axios from "axios";

class TableInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      isSignedUp: false,
      fileName: "",
      loadingicon: {
        display: "none",
        position: "absolute",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        zIndex: "25"
      }
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.getResult = this.getResult.bind(this);
    this.getuserdata = this.getuserdata.bind(this);
    this.getmkrurl = this.getmkrurl.bind(this);
    this.getNotFound = this.getNotFound.bind(this);
  }

  getuserdata(value) {
    return value.map((item, index) =>
      index === 0 ? (
        <table key={item.id}>
          <tbody>
            <tr>
              <td>Tarix :</td>
              <td>
                <strong>{item.name}</strong>
              </td>
            </tr>

            <tr>
              <td>Fin Kod :</td>
              <td>
                <strong>{item.fin_code}</strong>
              </td>
            </tr>

            <tr>
              <td>Seriya No:</td>
              <td>
                <strong></strong>
              </td>
            </tr>

            <tr>
              <td>Soyadı:</td>
              <td>
                <strong>{item.surname}</strong>
              </td>
            </tr>

            <tr>
              <td>Adi :</td>
              <td>
                <strong>{item.name}</strong>
              </td>
            </tr>

            <tr>
              <td>Atasının adı:</td>
              <td>
                <strong>{item.paternal_name}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )
    );
  }

  onFormSubmit(e, remove) {
    e.preventDefault();

    this.fileUpload(this.state.file, remove);
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });

    this.setState({ fileName: e.target.files[0].name });
  }

  fileUpload(file, remove) {
    var self = this;
    const formData = new FormData();
    const token = localStorage.getItem("user token");
    formData.append("mkr", file);
    formData.append("token", token);
    formData.append("userid", "56f2f1db-95f0-44d0-a92a-1286e06283e4");
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }
    };
    axios({
      method: "post",
      url: "you url",
      data: formData
    })
      .then(function(response) {
        console.log("dasdasdds",response)
        if (response.data.result === "success") {
          remove();
          self.setState({ isSignedUp: true });
        } else {
          self.setState({ removeItem: false });
        }
      })
      .catch(function(error) {
        if (error.response.status === 404) {
          console.log(error.response)
        } else if (error.response.status === 401) {
          localStorage.removeItem("user token");
          self.setState({ isSignedUp: true });
        
        }
      });

    // return post(url, formData, config);
  }
  handleChange() {
    this.setState({
      loadingicon: {
        position: "absolute",
        width: "100%",
        height: "622px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        zIndex: "25"
      }
    });
  }
  getResult() {}

  getmkrurl(e, value) {
    e.preventDefault();
    window.location = value[0].mkragreement;
  }

  getNotFound() {
    var my_data = {
      token: localStorage.getItem("user token"),
      userid: ("userid", "56f2f1db-95f0-44d0-a92a-1286e06283e4")
    };

    const formData = new FormData();
    const token = localStorage.getItem("user token");

    axios({
      method: "post",
      url: "you url",

      data: my_data
    })
      .then(function(response) {
        console.log(response);
      })

      .catch(function(error) {
        console.log(error.response);
      });
  }

  render() {
    if (this.state.isSignedUp) {
      return <Redirect to={{ pathname: "/task" }} />;
    }

    const spinnerStyle = {
      height: " 400px",
      width: "400px",
      marginTop: "-100px"
    };

    return (
      <div>
        <div style={this.state.loadingicon}>
          <img style={spinnerStyle} src="./img//Spinner-1s-200px copy.gif" />
        </div>
        <div className="container">
          <div className="information_customer  mx-auto col-md-6 col-lg-4 text-center text-capitalaize">
            <DatasConsumer>
              {value => (
                <div>
                  {this.getuserdata(value.data)}

                  <div className="button-list mt-4">
                    <ButtonContainer
                      className="btn_download"
                      onClick={e => {
                        this.getmkrurl(e, value.data);
                      }}
                      cart
                    >
                      Razılıq
                    </ButtonContainer>

                    <ButtonContainer
                      className="btn_notdate mt-4"
                      onClick={this.getNotFound}
                    >
                      Məlumat Tapılmadı
                    </ButtonContainer>

                    <form onSubmit={this.onFormSubmit}>
                      <div className="mt-4">
                        <label className="upload_btn">
                          MKR əlavə et
                          <input
                            className="mt-4"
                            style={{ display: "none" }}
                            type="file"
                            onChange={this.onChange}
                            accept="application/pdf"
                          />
                        </label>
                        <div>
                          <p style={{ color: "red" }}>{this.state.fileName}</p>
                        </div>
                      </div>
                      <ButtonContainer
                        disabled={!this.state.fileName}
                        className={
                          !this.state.fileName ? "disable_btn" : "btn_send mt-4"
                        }
                        onClick={e => {
                          this.handleChange();
                          this.onFormSubmit(e, value.removeItem);
                        }}
                      >
                        Gonder
                      </ButtonContainer>
                    </form>
                  </div>

                  {/* ))} */}
                </div>
              )}
            </DatasConsumer>
          </div>
        </div>
      </div>
    );
  }
}

export default TableInfo;
