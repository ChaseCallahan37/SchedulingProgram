import React, { Component, useEffect, useState } from "react";
import { getCourses } from "../../app-info/course-info";
import { getResources } from "../../app-info/resource-info";
import AvailabilityList from "../common/availability-list";
import BlankAvailability from "../common/BlankAvailability";
import Card from "../common/Card";

class HomeTable extends Component {
  constructor(props) {
    super(props);
    this.createCourseText = this.createCourseText.bind(this);
    this.createResourceText = this.createResourceText.bind(this);
    this.sendData = this.sendData.bind(this);
    this.state = {
      courses: [],
      ta: "",
      teachers: "",
      resources: [],
    };
  }
  componentDidMount = () => {
    const courses = getCourses();
    const resources = getResources();
    this.setState(() => ({ courses, resources }));
  };
  sendData() {
    const courses = getCourses();
    const resources = getResources();
    const data = {
      courses: courses,
      resources: resources,
    };
    console.log(data);
  }
  createCourseText = () => {
    return (
      <div>
        <button>Make Schedule</button>
        <h2>Courses</h2>
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {this.state.courses.map((course) => {
            if (!course.title) {
              return (
                <p>
                  {course.title}
                  {course.info}
                  {course.resources && course.resource}
                  {course.availability.days}
                </p>
              );
            }
            return (
              <p>
                {course.title} <br></br>
                {course.info} <br></br>
                {course.availability.days} <br></br>
              </p>
            );
          })}
        </div>
      </div>
    );
  };
  createResourceText = () => {
    return (
      <div>
        <h2>Resources</h2>
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {this.state.resources.map((resource) => {
            if (!resource.name) {
              return (
                <p>
                  {resource.type}
                  {resource.name}
                  {resource.availability.days}
                  {resource.constraints}
                </p>
              );
            }
            return (
              <p>
                {resource.type} <br></br>
                {resource.name} <br></br>
                {resource.availability.days} <br></br>
                {resource.constraints}
              </p>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    const courses = getCourses();
    return (
      <div>
        <Card
          key="new"
          content={{
            header: [
              {
                render: <label>New Class</label>,
              },
            ],
            body: [
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
        {courses &&
          courses.map((c) => (
            <Card
              key={c.id}
              content={{
                header: [
                  {
                    render: <label key={c.title}>{c.title}</label>,
                  },
                ],
                body: [
                  {
                    render: <p key={c.info}>{c.info}</p>,
                  },
                  {
                    render: (
                      <AvailabilityList key={c.id} item={c} update={() => {}} />
                    ),
                  },
                ],
              }}
            />
          ))}
        <button onClick={this.sendData}>Make Schedule</button>
        <div className="d-md-flex justify-content-md-end"></div>
        {/* {this.createCourseText()}
    {this.createResourceText()} */}
        <br></br>
        <br></br>
        <BlankAvailability />
      </div>
    );
  }
}

export default HomeTable;
