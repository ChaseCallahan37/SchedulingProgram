import React, { Component } from "react";
import img from "../../images/Logo.png";

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
      class: "mx-auto d-block img-fluid",

    };
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ color: "white", backgroundColor: "#B20837"  }}
        >
          <img
           
            src={img}
            style={this.styleImg()}
            alt="University of Alabama Logo"
          />
          <h1>Scheduling</h1>
        </nav>
      </div>
    );
  }
}

export default CourseHeader;
