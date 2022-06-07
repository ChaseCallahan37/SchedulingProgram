import React, { Component } from "react";
import CourseBox from "./course-box";

class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.createClasses = this.createClasses.bind(this);
  }
  createClasses() {
    return <div className="row row-cols-1 row-cols-md-4 g-4"> {this.props.courses.map((course) => {
      return <CourseBox course={course} />;
    })}</div>;
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="button"
            onClick={() => {
              this.props.addClass("class data");
            }}
          >
            Add Course
          </button>
        </div>
        {this.createClasses()}
      </div>
    );
  }
}

export default CourseTable;
