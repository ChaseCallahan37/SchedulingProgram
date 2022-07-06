import React, { Component } from "react";
import { getResources, saveResource } from "./../../app-info/resource-info";
import Card from "../common/Card";
import ShowAvailability from "../common/ShowAvailability";
import { getBlankAvailability } from "../../Classes/availability-class";
import { v4 as uuidv4 } from "uuid";
import BlankAvailability from "../common/BlankAvailability";
import Time from "../../Classes/TimeClass";

class ResourceTable extends Component {
  state = {
    resources: [],
    blankResource: {},
    showBlank: false,
  };
  componentDidMount() {
    this.updateResources();
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
      constraints: [],
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
    blankResource[name] = value;
    this.setState({ blankResource });
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
      const content = {
        header: [<h1>{resource.name}</h1>],
        body: [
          <label>Type: {resource.type}</label>,
          <ShowAvailability availability={resource.availability} />,
        ],
        footer: [<button>Button</button>],
      };
      return <Card content={content} />;
    });
  };
  renderBlankResource() {
    const { type, name, availability, constraints } = this.state.blankResource;
    return (
      <Card
        content={{
          header: [
            <input
              onChange={this.handleUpdates}
              value={name}
              name="name"
              placeholder="Name"
            />,
          ],
          body: [
            <input
              onChange={this.handleUpdates}
              value={type}
              name="type"
              placeholder="Type"
            />,
            <BlankAvailability
              availability={availability}
              update={this.handleUpdates}
            />,
          ],
          footer: [<button onClick={this.handleSaveResource}>Save</button>],
        }}
      />
    );
  }
  render() {
    const { resources, showBlank } = this.state;
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
