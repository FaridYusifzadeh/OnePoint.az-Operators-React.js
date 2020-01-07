import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { DatasProvider } from "./context";

ReactDOM.render(
  
  <DatasProvider>
   
      <App />
  
  </DatasProvider>
 ,
  document.getElementById("root")
);
serviceWorker.unregister();
