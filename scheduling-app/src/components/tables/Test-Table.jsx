import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import BlankCard from "../page-components/blank-card";
import CourseBox from "../page-components/course-box";
import { createBlankAvailability } from "./../../Classes/availability-class";
import {
  getCourses,
  saveCourse,
  createBlankCourse,
} from "../../app-info/course-info";
import Card from "../common/Card";
import AvailabilityList from "../common/availability-list";
import ShowAvailability from "../common/ShowAvailability";
import BlankAvailability from "../common/BlankAvailability";

class TestTable extends Component {
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
  onChange = (e) => {
    const { name, value } = e.target;
    const newCourse = { ...this.state.newCourse };
    newCourse[name] = value;
    this.setState({ newCourse });
    console.log(this.state.newCourse);
  };

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
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                        className="form-control"
                        aria-label="With textarea"
                      ></textarea>
                    ),
                  },
                  {
                    render: <BlankAvailability />,
                  },
                ],
                footer: [
                  {
                    render: <button>Save</button>,
                  },
                ],
              }}
            />
          )}
          {courses.length !== 0 &&
            courses.map((c) => (
              <Card
                update={this.onChange}
                content={{
                  header: [
                    {
                      render: <label>{c.title}</label>,
                    },
                  ],
                  body: [
                    {
                      render: <p>{c.info}</p>,
                    },
                    {
                      render: <label className="label">Availability:</label>,
                    },
                    {
                      render: (
                        <ShowAvailability availability={c.availability} />
                      ),
                    },
                  ],
                  footer: [
                    {
                      render: <button>Edit This Course</button>,
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

export default TestTable;
