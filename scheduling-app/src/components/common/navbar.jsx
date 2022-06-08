import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <NavLink
              activeClassName="active"
              className={"nav-link"}
              to="/"
              exact={true}
            >
              Courses
            </NavLink>
          </li>
          <li class="nav-item">
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
