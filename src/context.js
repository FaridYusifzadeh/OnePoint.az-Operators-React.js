import React, { Component } from "react";
import { connect } from "./SocketData";

const DatasContext = React.createContext();

class DatasProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    connect(message => {
      let templist = this.state.data;
      templist.push(message);
      this.setState({ data: templist });
    });
  }

  removeItem = () => {
    let shiftList = this.state.data;
    shiftList.shift();
    this.setState({ data: shiftList });
  };
  render() {
    return (
      <DatasContext.Provider
        value={{ ...this.state, removeItem: this.removeItem }}
      >
        {this.props.children}
      </DatasContext.Provider>
    );
  }
}

const DatasConsumer = DatasContext.Consumer;

export { DatasProvider, DatasConsumer };
