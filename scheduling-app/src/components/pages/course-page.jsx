import React, { Component } from "react";
import CourseHeader from "../page-components/course-header";
import CourseTable from "../page-components/course-table";
import { getCourses } from "../../course-info/course-info";

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      ta: "",
      teachers: "",
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
        <h1>This is a test</h1>
        <CourseHeader></CourseHeader>
        <h1>To see what happens when i merge</h1>
        <CourseTable courses={this.state.courses} names={"Luke"}></CourseTable>
        <h2>With conflicts</h2>
      </div>
    );
  }
}

export default CoursePage;
