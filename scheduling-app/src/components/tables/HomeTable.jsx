import React, { Component, useEffect, useState } from "react";
import BlankAvailability from "../Common/BlankAvailability";
import Card from "../Common/Card";
import { getCourses } from "../../AppInfo/CourseInfo";
import { getResources } from "../../AppInfo/ResourceInfo";

class HomeTable extends Component {
  state = {
    courses: [],
    ta: "",
    teachers: "",
    resources: [],
  };

  sendData = () => {
    const courses = getCourses();
    const resources = getResources();
    const data = {
      courses: courses,
      resources: resources,
    };
  };

  render() {
    return (
      <div className="d-md-flex justify-content-md-end">
        <button className="button" onClick={this.sendData}>
          Make Schedule
        </button>
        <br></br>
        <br></br>
        <BlankAvailability />
      </div>
    );
  }
}

export default HomeTable;
