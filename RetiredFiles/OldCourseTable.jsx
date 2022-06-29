import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import BlankCard from "../scheduling-app/src/components/page-components/blank-card";
import CourseBox from "../scheduling-app/src/components/page-components/course-box";
import { createBlankAvailability } from "../scheduling-app/src/Classes/availability-class";
import {
  getCourses,
  saveCourse,
  createBlankCourse,
} from "../scheduling-app/src/app-info/course-info";

class CourseTable extends Component {
  constructor(props) {
    super(props);
    this.createClasses = this.createClasses.bind(this);
    this.addClass = this.addClass.bind(this);
    this.updateNewClass = this.updateNewClass.bind(this);
    this.renderBlankCard = this.renderBlankCard.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveClass = this.saveClass.bind(this);
    this.state = {
      courses: [],
      newCourse: this.newCourseTemplate(),
    };
  }
  componentDidMount = () => {
    this.updateCourseState();
  };
  newCourseTemplate() {
    return {
      id: null,
      title: null,
      info: null,
      availability: createBlankAvailability(),
      resources: null,
    };
  }
  updateCourseState() {
    const courses = getCourses();
    this.setState(() => ({ courses }));
  }
  saveClass() {
    saveCourse({ ...this.state.newCourse });
    this.setState(() => ({ newCourse: this.newCourseTemplate() }));
    this.updateCourseState();
  }
  updateNewClass(field, content) {
    const newCourse = { ...this.state.newCourse };
    newCourse[field] = content;
    this.setState(() => ({ newCourse }));
  }
  addClass = () => {
    const newCourse = { ...this.state.newCourse };
    newCourse.id = uuidv4();
    this.setState(() => ({ newCourse }));
  };
  createClasses() {
    const { courses } = this.state;
    return courses.map((course) => {
      return <CourseBox key={course.id} course={course} />;
    });
  }
  renderBlankCard() {
    const { newCourse } = this.state;
    return (
      newCourse.id && (
        <BlankCard
          key={"unique"}
          course={newCourse}
          updateNewClass={this.updateNewClass}
          saveClass={this.saveClass}
        />
      )
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
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {this.createClasses()}
          {this.renderBlankCard()}
        </div>
      </div>
    );
  }
}

export default CourseTable;
