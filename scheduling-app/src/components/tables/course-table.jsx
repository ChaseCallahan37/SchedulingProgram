import React, { Component } from "react";
import BlankCard from "../page-components/blank-card";
import CourseBox from "../page-components/course-box";
import { getCourses } from "../../app-info/course-info";

class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.createClasses = this.createClasses.bind(this);
    this.addClass = this.addClass.bind(this);
    this.state = {
      courses: [],
      ta: "",
      teachers: "",
    };
  }
  componentDidMount = () => {
    const courses = getCourses();
    this.setState(() => ({ courses }));
  };
  addClass = () => {
    const courses = [...this.state.courses];
    courses.push({});
    this.setState(() => ({ courses }));
  };
  createClasses() {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {this.state.courses.map((course) => {
          if (!course.title) {
            return <BlankCard key={course.title} course={course} />;
          }
          return <CourseBox key={course.title} course={course} />;
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.addClass}>
            Add Course
          </button>
        </div>
        {this.createClasses()}
      </div>
    );
  }
}

export default CourseTable;
