import React, { Component, useEffect, useState } from "react";
import { getCourses } from "../../app-info/course-info";
import { getResources } from "../../app-info/resource-info";

class HomeTable extends Component {
  constructor(props) {
    super(props);
    this.createCourseText = this.createCourseText.bind(this);
    this.createResourceText = this.createResourceText.bind(this);
    this.state = {
      courses: [],
      ta: "",
      teachers: "",
      resources: []
    };
  }
  componentDidMount = () => {
    const courses = getCourses();
    const resources = getResources();
    this.setState(() => ({ courses, resources }));
  };
  createCourseText = () => {
    return (
      <div>
      <h2>Courses</h2>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {this.state.courses.map((course) => {
          if (!course.title) {
            return (
              <p>
              {course.title}
              {course.info}
              {course.ta}
              </p>
            )
          }
          return (
            <p>
            {course.title} <br></br>
            {course.info} <br></br>
            {course.ta} <br></br>
            </p>
          )
        })}
      </div>
      </div>
    )
  }
  createResourceText = () => {
    return (
      <div>
      <h2>Resources</h2>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {this.state.resources.map((resource) => {
          if (!resource.name) {
            return (
              <p>
              {resource.type}
              {resource.name}
              {resource.availability}
              {resource.constraints}
              </p>
            )
          }
          return (
            <p>
            {resource.type} <br></br>
            {resource.name} <br></br>
            {resource.availability} <br></br>
            {resource.constraints}
            </p>
          )
        })}
      </div>
      </div>
    )
  }

  render() {
    return (
        <div>
          <div className="d-md-flex justify-content-md-end">
          </div>
          {this.createCourseText()}
          {this.createResourceText()}
        </div>
    );
  }
};

export default HomeTable;