import React, { Component } from "react";
import Resource from "../../Classes/resources-class";
import { getResources } from "../../app-info/resource-info";
import BlankCard from "../page-components/blank-card";
import CourseBox from "../page-components/course-box";

class ResourceTable extends Component {
  constructor(props) {
    super(props)
    this.createResource = this.createResource.bind(this);
    this.addResource = this.addResource.bind(this);
    this.state = {
      type: '',
      name: '',
      availability: '',
      constraints: [],
    };
  }
  componentDidMount = () => {
    const resources = getResources(); 
    this.setState(() => ({ resources}));
  };
  addResource = () => {
    const resources = [...this.state.resources];
    resources.push({});
    this.setState(() => ({ resources }));
  };
  createResource() {
    return (
      console.log('hello1')
    );
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
        Column1
          <input className="col-md-2" placeholder="Type"/>
          <input className="col-md-2" placeholder="Name"/>
          <input className="col-md-2" placeholder="availability"/>
        </div>
        <div className="col-md-6">
        Column2
          <input className="col-md-2" placeholder="Type"/>
          <input className="col-md-2" placeholder="Name"/>
          <input className="col-md-2" placeholder="availability"/>
        </div>
      </div>
    );
  }
}

export default ResourceTable;