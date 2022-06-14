import React, { Component } from "react";
import img from "../../images/Logo.png";
import NavBar from "../common/navbar";

//Header, always visible

class CourseHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  styleImg() {
    return {
      width: 110,
      height: 45,
      
    };
  }
  render() {
    return (
      <div className="text-center">
        <nav
          className="navbar"
          style={{ color: "white", backgroundColor: "#B20837" }}
        >
          <img
            className=""
            src={img}
            style={this.styleImg()}
            alt="University of Alabama Logo"
          />
          <h1>Scheduling</h1>
          <NavBar />
        </nav>
      </div>
    );
  }
}

export default CourseHeader;
