import React, { Component, useEffect, useState } from "react";
import BlankAvailability from "../common/BlankAvailability";
import Card from "../common/Card";
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
    console.log(data);
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
