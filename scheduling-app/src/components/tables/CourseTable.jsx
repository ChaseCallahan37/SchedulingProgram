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
import Time from "../../Classes/TimeClass";
import { GETCourses } from "./../../Api-Calls/SchedulingApi";

class CourseTable extends Component {
  state = {
    courses: [],
    showBlank: false,
    newCourse: {
      id: null,
      title: "",
      info: "",
      availability: [
        {
          title: "Monday",
          times: {
            start: new Time(),
            end: new Time(),
          },
        },
        {
          title: "Tuesday",
          times: {
            start: new Time(),
            end: new Time(),
          },
        },
        {
          title: "Wednesday",
          times: {
            start: new Time(),
            end: new Time(),
          },
        },
        {
          title: "Thursday",
          times: {
            start: new Time(),
            end: new Time(),
          },
        },
        {
          title: "Friday",
          times: {
            start: new Time(),
            end: new Time(),
          },
        },
      ],
      resources: [],
    },
  };

  componentDidMount = () => {
    this.updateCourses();
  };
  updateCourses = async () => {
    const courses = await getCourses();
    this.setState(() => ({ courses }));
  };
  handleAddClass = () => {
    const newCourse = { ...this.state.newCourse };
    newCourse.id = uuidv4();
    this.setState(() => ({ newCourse, showBlank: true }));
  };
  handleOnChange = (e) => {
    const { name, value } = e.target;
    const newCourse = { ...this.state.newCourse };
    newCourse[name] = value;
    this.updateNewCourse(newCourse);
  };
  handleEdit = (e) => {
    const { id } = e.target;
    const courses = [...this.state.courses];
    const index = courses.findIndex((course) => course.id === id);
    const newCourse = courses.splice(index, 1)[0];
    this.setState(() => ({ newCourse, showBlank: true, courses }));
  };
  saveClass = () => {
    saveCourse({ ...this.state.newCourse });
    this.setState(() => ({
      showBlank: false,
      newCourse: {
        id: null,
        title: "",
        info: "",
        availability: [
          {
            title: "Monday",
            times: {
              start: new Time(),
              end: new Time(),
            },
          },
          {
            title: "Tuesday",
            times: {
              start: new Time(),
              end: new Time(),
            },
          },
          {
            title: "Wednesday",
            times: {
              start: new Time(),
              end: new Time(),
            },
          },
          {
            title: "Thursday",
            times: {
              start: new Time(),
              end: new Time(),
            },
          },
          {
            title: "Friday",
            times: {
              start: new Time(),
              end: new Time(),
            },
          },
        ],
        resources: [],
      },
    }));
    this.updateCourses();
  };
  updateNewClass(field, content) {
    const newCourse = { ...this.state.newCourse };
    newCourse[field] = content;
    this.setState(() => ({ newCourse }));
  }
  updateNewCourse = (newCourse) => {
    this.setState({ newCourse });
    console.log(this.state.newCourse);
  };
  renderAllCourses = () => {
    const { courses } = this.state;
    //If there are courses
    if (courses.length !== 0) {
      return courses.map((course) => (
        <Card
          key={course.title}
          update={this.handleOnChange}
          content={{
            header: [<label key="header1">{course.title}</label>],
            body: [
              <p key="body1">{course.info}</p>,

              <label key="body2" className="label">
                Availability:
              </label>,

              <ShowAvailability
                key="body3"
                availability={course.availability}
              />,
            ],
            footer: [
              <button
                id={course.id}
                onClick={this.handleEdit}
                className="button"
                key="footer1"
              >
                Edit
              </button>,
            ],
          }}
        />
      ));
    }
  };
  renderBlankCourse = () => {
    const { newCourse, showBlank } = this.state;
    if (showBlank) {
      return (
        <Card
          key="new"
          content={{
            header: [
              <input
                key="header1"
                className="col-md-8"
                type="text"
                name="title"
                value={newCourse.title}
                placeholder="Name"
                onChange={this.handleOnChange}
              ></input>,
            ],
            body: [
              <span key="body1" className="input-group-text">
                Course Info
              </span>,

              <textarea
                key="body2"
                name="info"
                onChange={this.handleOnChange}
                className="form-control"
                aria-label="With textarea"
              ></textarea>,

              <BlankAvailability
                key="body3"
                availability={newCourse.availability}
                update={this.handleOnChange}
              />,
            ],
            footer: [
              <button className="button" key="footer1" onClick={this.saveClass}>
                Save
              </button>,
            ],
          }}
        />
      );
    }
  };

  render() {
    const { courses, newCourse } = this.state;
    console.log(courses);
    return (
      <div>
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.handleAddClass}>
            Add Course
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {this.renderAllCourses()}
          {this.renderBlankCourse()}
        </div>
      </div>
    );
  }
}

export default CourseTable;
