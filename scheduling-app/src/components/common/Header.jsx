import React, { Component } from "react";
import img from "../../Images/Logo.png";
import NavBar from "./Navbar";
import "./Header.css";

//Header, always visible

class CourseHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  styleImg() {
    return {
      width: 200,
      height: 75,
    };
  }
  render() {
    return (
      <div className="">
        <nav
          className="navbar"
          style={{ color: "white", backgroundColor: "#B20837" }}
        >
          <figure id="figure-header">
            <img
              id="alabama-logo"
              className=""
              src={img}
              style={this.styleImg()}
              alt="University of Alabama Logo"
            />
            <figcaption id="scheduling-label">
              <h3>Scheduling Tool </h3>
            </figcaption>
          </figure>
          <NavBar />
        </nav>
      </div>
    );
  }
}

export default CourseHeader;
