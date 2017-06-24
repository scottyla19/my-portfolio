import React, { Component } from "react";
import { IconButton, Menu, MenuItem } from "react-mdl";
// import logo from "./logo.svg";
// import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <h3 className="header-icon">
            My Img

          </h3>
          <h4 className="header-name">
            Scott LaForest
          </h4>
          <p>
            Web Developer
          </p>
        </div>
        <div className="header-right">
          <div style={{ position: "relative" }}>
            <IconButton name="menu" id="demo-menu-lower-right" />
            <Menu target="demo-menu-lower-right" align="right">
              <MenuItem>About</MenuItem>
              <MenuItem>Portfolio</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Contact</MenuItem>
            </Menu>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;
