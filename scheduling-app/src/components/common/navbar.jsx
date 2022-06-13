import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const activeClass = "nav-link-active";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div id="" className="nav-bar-container">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              id="nav-link-container"
              activeClassName={"nav-link-active"}
              className={"nav-link nav-item"}
              to="/"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName={activeClass}
              className={"nav-link nav-item"}
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onMouseOver={""}
              activeClassName={activeClass}
              className={"nav-link nav-item"}
              to="/resources"
            >
              Resource Page
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
