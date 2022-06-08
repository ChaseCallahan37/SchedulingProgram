import React, { Component } from "react";
import CourseHeader from "../page-components/course-header";
import CourseTable from "../page-components/course-table";
import { getCourses } from "../../course-info/course-info";

class CoursePage extends Component {
  state = {
    courses: [],
    ta: "",
    teachers: "",
  };
  componentDidMount = () => {
    const courses = getCourses();
    this.setState(() => ({ courses }));
  };
  addClass = () => {
    const courses = [...this.state.courses];
    courses.push({});
    this.setState(() => ({ courses }));
  };
  render() {
    return (
      <div>
        <CourseHeader></CourseHeader>
        <CourseTable
          courses={this.state.courses}
          addClass={this.addClass}
        ></CourseTable>
      </div>
    );
  }
}

export default CoursePage;
