import React, { Component } from "react";
import { getResources } from "../../app-info/resource-info";
import BlankResourceCard from "../page-components/blank-resource-card";
import ResourceBox from "../page-components/resources-box";

class ResourceTable extends Component {
  constructor(props) {
    super(props);
    this.createResource = this.createResource.bind(this);
    this.addSomeone = this.addSomeone.bind(this);
    this.state = {
      resources: [],
    };
  }
  componentDidMount = () => {
    const resources = getResources();
    this.setState(() => ({ resources }));
  };
  addSomeone = () => {
    const resources = [...this.state.resources];
    resources.push({});
    this.setState(() => ({ resources }));
  };
  createResource() {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {this.state.resources.map((resource) => {
          if (!resource.name) {
            return (
              <BlankResourceCard key={resource.name} resource={resource} />
            );
          }
          return <ResourceBox key={resource.name} resource={resource} />;
        })}
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="d-md-flex justify-content-md-end">
          <button className="button" onClick={this.addSomeone}>
            Add Resource
          </button>
        </div>
        {this.createResource()}
      </div>
    );
  }
}

export default ResourceTable;
