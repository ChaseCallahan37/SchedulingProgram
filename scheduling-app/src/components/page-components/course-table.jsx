import React, { Component } from "react";
import BlankCard from "./blank-card";
import CourseBox from "./course-box";

class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.createClasses = this.createClasses.bind(this);
  }
  createClasses() {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {this.props.courses.map((course) => {
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
          <button className="button" onClick={this.props.addClass}>
            Add Course
          </button>
        </div>
        {this.createClasses()}
      </div>
    );
  }
}

export default CourseTable;
