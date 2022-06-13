import React, { Component } from "react";
import { addResource, getResources } from "../../app-info/resource-info";
import BlankResourceCard from "../page-components/blank-resource-card";
import ResourceBox from "../page-components/resources-box";
import Resource from "../../Classes/resources-class";
import { v4 as uuidv4 } from "uuid";

class ResourceTable extends Component {
  constructor(props) {
    super(props);
    this.createResource = this.createResource.bind(this);
    this.addSomeone = this.addSomeone.bind(this);
    this.renderBlankResource = this.renderBlankResource.bind(this);
    this.getBlankTemplate = this.getBlankTemplate.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.updateResources = this.updateResources.bind(this);
    this.saveNewResource = this.saveNewResource.bind(this);
    this.updatingBlankResource = this.updatingBlankResource.bind(this);
    this.state = {
      resources: [],
      blankResource: {},
    };
  }
  componentDidMount = () => {
    this.updateResources();
    this.updatingBlankResource();
  };
  updateResources() {
    const resources = getResources();
    this.setState(() => ({ resources }));
  }
  updatingBlankResource() {
    const blankResource = this.getBlankTemplate();
    this.setState({ blankResource });
  }
  getBlankTemplate() {
    return {
      id: null,
      type: null,
      name: null,
      availability: null,
      constraints: [],
    };
  }
  saveNewResource() {
    const newResource = { ...this.state.blankResource };
    addResource(newResource);
    this.updateResources();
    this.updatingBlankResource();
  }
  addSomeone() {
    const blankResource = { ...this.state.blankResource };
    if (!this.state.blankResource.id) {
      blankResource.id = uuidv4();
      this.setState(() => ({ blankResource }));
    }
  }
  saveInput(content, field, constraint = null) {
    const blankResource = { ...this.state.blankResource };
    if (!constraint) {
      blankResource[field] = content;
    } else {
      let index = blankResource.constraints.findIndex((c) => c === constraint);

      blankResource.constraints[index] = content;
    }
    this.setState(() => ({ blankResource }));
    console.log(this.state.blankResource);
  }
  createResource() {
    return this.state.resources.map((resource) => {
      return <ResourceBox key={resource.name} resource={resource} />;
    });
  }
  renderBlankResource() {
    const { blankResource } = this.state;
    if (blankResource.id) {
      return (
        <BlankResourceCard
          key={blankResource.id}
          resource={{ ...blankResource }}
          saveInput={this.saveInput}
          saveNewResource={this.saveNewResource}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.addSomeone}>
            Add Resource
          </button>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-0">
          {this.createResource()}
          {this.renderBlankResource()}
        </div>
      </div>
    );
  }
}

export default ResourceTable;
