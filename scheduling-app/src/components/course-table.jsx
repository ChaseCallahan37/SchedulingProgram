import React, { Component } from "react";

class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.createClasses = this.createClasses.bind(this);
  }
  createClasses() {
    console.log(this.props);
    return this.props.courses.map((course) => {
      return <p>{course.title}</p>;
    });
  }

  render() {
    return (
        <div>{this.createClasses()}
        </div>);
  }
}

export default CourseTable;
