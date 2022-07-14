import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeClassStyle = "nav-link nav-link-active";
  const nonActiveClassStyle = "nav-link nav-item";
  return (
    <div id="" className="nav-bar-container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            id="nav-link-container"
            className={({ isActive }) =>
              isActive ? activeClassStyle : nonActiveClassStyle
            }
            to="/"
            exact="true"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassStyle : nonActiveClassStyle
            }
            to="/courses"
          >
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassStyle : nonActiveClassStyle
            }
            to="/resources"
          >
            Resource Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
