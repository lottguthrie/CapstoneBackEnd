import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Router from "react-router-dom";

class MainApp extends React.Component {
  render() {
    return (
    
      <div className="content">

        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<MainApp />, document.getElementById("root"));