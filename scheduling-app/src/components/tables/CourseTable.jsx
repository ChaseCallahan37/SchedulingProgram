import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import BlankCard from "../page-components/blank-card";
import CourseBox from "../page-components/course-box";
import {
  createBlankAvailability,
  getBlankAvailability,
} from "./../../Classes/availability-class";
import {
  getCourses,
  saveCourse,
  createBlankCourse,
} from "../../app-info/course-info";
import Card from "../common/Card";
import AvailabilityList from "../common/availability-list";
import ShowAvailability from "../common/ShowAvailability";
import BlankAvailability from "../common/BlankAvailability";
import { relativeTimeThreshold } from "moment";

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
      title: "",
      info: null,
      availability: getBlankAvailability(),
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
  onChange = (name, value) => {
    const newCourse = { ...this.state.newCourse };
    newCourse[name] = value;
    this.updateNewCourse(newCourse);
  };
  updateNewCourse(newCourse) {
    this.setState({ newCourse });
    console.log(this.state.newCourse);
  }
  // onChange = (e) => {
  //   const { name, value } = e.target;
  //   const newCourse = { ...this.state.newCourse };
  //   newCourse[name] = value;
  //   this.setState({ newCourse });
  //   console.log(this.state.newCourse);
  // };

  render() {
    const { courses, newCourse } = this.state;
    return (
      <div>
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.addClass}>
            Add Course
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {newCourse.id && (
            <Card
              key="new"
              content={{
                header: [
                  {
                    render: (
                      <input
                        className="col-md-8"
                        type="text"
                        name="title"
                        value={newCourse.title}
                        placeholder="Name"
                        onChange={(e) =>
                          this.onChange(e.target.name, e.target.value)
                        }
                      ></input>
                    ),
                  },
                ],
                body: [
                  {
                    render: (
                      <span className="input-group-text">Course Info</span>
                    ),
                  },
                  {
                    render: (
                      <textarea
                        name="info"
                        onChange={(e) =>
                          this.onChange(e.target.name, e.target.value)
                        }
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    ),
                  },
                  {
                    render: (
                      <BlankAvailability
                        availability={newCourse.availability}
                        update={this.onChange}
                      />
                    ),
                  },
                ],
                footer: [
                  {
                    render: <button onClick={this.saveClass}>Save</button>,
                  },
                ],
              }}
            />
          )}
          {courses.length !== 0 &&
            courses.map((course) => (
              <Card
                key={course.title}
                update={this.onChange}
                content={{
                  header: [
                    {
                      render: <label key="header1">{course.title}</label>,
                    },
                  ],
                  body: [
                    {
                      render: <p key="body1">{course.info}</p>,
                    },
                    {
                      render: (
                        <label key="body2" className="label">
                          Availability:
                        </label>
                      ),
                    },
                    {
                      render: (
                        <ShowAvailability
                          key="body3"
                          availability={course.availability}
                        />
                      ),
                    },
                  ],
                  footer: [
                    {
                      render: <button key="footer1">Edit This Course</button>,
                    },
                  ],
                }}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default CourseTable;
