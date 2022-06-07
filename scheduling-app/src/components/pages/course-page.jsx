import React, { Component } from "react";
import CourseHeader from "../page-components/course-header";
import CourseTable from "../page-components/course-table";
import { getCourses } from "../../course-info/course-info";

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.addClass = this.addClass.bind(this)
    this.state = {
      courses: [],
      ta: "",
      teachers: "",
    };
  }
  addClass(){
    //runs blank card and adds a blank card to the div

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
        <CourseTable courses={this.state.courses} names={"Luke"} addClass={this.addClass}></CourseTable>
      </div>
    );
  }
}

export default CoursePage;
