import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className={"nav-link"}
              to="/"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className={"nav-link"}
              to="/courses"
            >
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className={"nav-link"}
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
