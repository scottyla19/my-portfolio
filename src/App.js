import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
