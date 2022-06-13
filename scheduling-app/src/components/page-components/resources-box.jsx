import React, { Component } from "react";

//Where all the resources will live and be added
class ResourceBox extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header text-white p-3 border text-center fs-3 ">
          {this.props.resource && this.props.resource.name}
        </div>
        <div className="resource-card-body text-wrap">
          {this.props.resource.type}
          <br></br>
          {this.props.resource.availability}
          <br></br>
          {this.props.resource.constraints}
        </div>
        <div className="resource-card-footer">Something added here?</div>
      </div>
    );
  }
} //should add a this.props.course.section, and maybe a full major name

export default ResourceBox;
