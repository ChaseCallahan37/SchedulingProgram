import React, { Component } from "react";
import CourseHeader from "./course-header";
import CourseTable from "./course-table";
import { getCourses } from "./../course-info/course-info";

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      ta: "",
      teachers: ""
    };
  }
  componentDidMount() {
    const newCourses = getCourses();
    this.setState(() => {
      return { courses: newCourses };
    });
  }
  render() {
    return (
      <div>
        <CourseHeader></CourseHeader>
        <CourseTable courses={this.state.courses} names={"Luke"}></CourseTable>
      </div>
    );
  }
}

export default CoursePage;
