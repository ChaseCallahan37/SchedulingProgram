import React, { Component } from "react";
import { getResources, saveResource } from "./../../app-info/resource-info";
import Card from "../common/Card";
import ShowAvailability from "../common/ShowAvailability";
import { getBlankAvailability } from "../../Classes/availability-class";
import { v4 as uuidv4 } from "uuid";
import BlankAvailability from "../common/BlankAvailability";
import Time from "../../Classes/TimeClass";
import { getCourses } from "../../app-info/course-info";

class ResourceTable extends Component {
  state = {
    resources: [],
    courses: [],
    blankResource: {},
    showBlank: false,
  };
  componentDidMount() {
    this.updateResources();
    this.setState({ courses: getCourses() });
  }
  updateResources = () => {
    this.setState({ resources: getResources() });
  };
  resetBlankResource() {
    const blankResource = {
      id: uuidv4(),
      type: "",
      name: "",
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
      constraints: { classSize: "", teachingStyle: "" },
    };
    this.setState({ blankResource });
  }
  handleAddResource = () => {
    this.setState({ showBlank: true });
    this.resetBlankResource();
  };
  handleUpdates = (e) => {
    const { name, value } = e.target;
    const blankResource = { ...this.state.blankResource };

    if (name.includes(".")) {
      const path = name.split(".");
      blankResource[path[0]][path[1]] = value;
    } else {
      blankResource[name] = value;
      this.setState({ blankResource });
    }
    console.log(this.state.blankResource);
  };
  handleSaveResource = () => {
    saveResource({ ...this.state.blankResource });
    this.updateResources();
    this.resetBlankResource();
    this.setState({ showBlank: false });
  };
  renderAllResources = () => {
    const { resources } = this.state;
    return resources.map((resource) => {
      return (
        <Card
          content={{
            header: [<h1>{resource.name}</h1>],
            body: [
              <label>Type: {resource.type}</label>,
              <ShowAvailability availability={resource.availability} />,
              <label>Class Size: {resource.constraints.classSize}</label>,
              <br></br>,
              <label>
                Teaching Style: {resource.constraints.teachingStyle}
              </label>,
            ],
            footer: [<button>Button</button>],
          }}
        />
      );
    });
  };
  renderBlankResource() {
    const { type, name, availability, constraints } = this.state.blankResource;
    return (
      <Card
        content={{
          header: [
            <input
              className="col-md-8"
              id="resource-name-box"
              onChange={this.handleUpdates}
              value={name}
              name="name"
              placeholder="Name"
            />,
            <select
              onChange={this.handleUpdates}
              value={type}
              name="type"
              placeholder="Type"
            >
              <option></option>
              <option>Tenure Track</option>
              <option>Non-Tenure Track</option>
              <option>PhD. Student</option>
            </select>,
          ],
          body: [
            <BlankAvailability
              availability={availability}
              update={this.handleUpdates}
            />,
            <div>
              <h2>Constraints</h2>
              <label>Class Size Allowed</label>
              <select
                name="constraints.classSize"
                onChange={this.handleUpdates}
              >
                <option></option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
              <label>Teaching Method</label>
              <select
                name="constraints.teachingStyle"
                onChange={this.handleUpdates}
              >
                <option></option>
                <option>Online</option>
                <option>In-Person</option>
                <option>Hybrid</option>
                <option>All</option>
              </select>
              <label>Classes Per Year</label>
              <select
                name="constraints.classesPerYear"
                onChange={this.handleUpdates}
              >
                <option></option>
                <option></option>
                <option>In-Person</option>
                <option>Hybrid</option>
                <option>All</option>
              </select>
            </div>,
          ],
          footer: [<button onClick={this.handleSaveResource}>Save</button>],
        }}
      />
    );
  }
  render() {
    const { resources, showBlank, courses } = this.state;
    return (
      <div>
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.handleAddResource}>
            Add Resource
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {this.renderAllResources()}
          {showBlank && this.renderBlankResource()}
        </div>
      </div>
    );
  }
}

export default ResourceTable;
