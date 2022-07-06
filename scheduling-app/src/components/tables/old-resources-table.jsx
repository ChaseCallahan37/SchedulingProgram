import React, { Component } from "react";
import { saveResource, getResources } from "../../app-info/resource-info";
import BlankResourceCard from "../page-components/blank-resource-card";
import ResourceBox from "../page-components/resources-box";
import Resource from "../../Classes/resources-class";
import { v4 as uuidv4 } from "uuid";
import { createBlankResource } from "../../Classes/resources-class";

class OldResourceTable extends Component {
  constructor(props) {
    super(props);
    this.createResource = this.createResource.bind(this);
    this.renderBlankResource = this.renderBlankResource.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.updateResources = this.updateResources.bind(this);
    this.saveNewResource = this.saveNewResource.bind(this);
    this.updatingBlankResource = this.updatingBlankResource.bind(this);
    this.toggleShowBlank = this.toggleShowBlank.bind(this);
    this.state = {
      resources: [],
      blankResource: {},
      showBlank: false,
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
    const blankResource = createBlankResource();
    this.setState({ blankResource });
  }
  saveNewResource() {
    const newResource = { ...this.state.blankResource };
    saveResource({ ...newResource });
    this.updateResources();
    this.updatingBlankResource();
    this.toggleShowBlank();
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
  }
  toggleShowBlank() {
    this.setState((prevState) => ({ showBlank: !prevState.showBlank }));
  }
  createResource() {
    if (!!this.state.resources) {
      return this.state.resources.map((resource) => {
        return <ResourceBox key={resource.name} resource={resource} />;
      });
    }
  }
  renderBlankResource() {
    const { blankResource, showBlank } = this.state;
    if (showBlank) {
      return (
        <BlankResourceCard
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
          <button className="button" onClick={this.toggleShowBlank}>
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

export default OldResourceTable;
