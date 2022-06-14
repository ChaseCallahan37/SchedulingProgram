import React, { Component } from "react";
import { addResource } from "../../app-info/resource-info";
import ResourceTable from "../tables/resources-table";
import { getCourses } from "../../app-info/course-info";

//Shows a blank card in the form and allows user to add course information

//Thoughts on how to go about formatting the blank card, feel free to delete it if you dont like it. -CC

class BlankResourceCard extends Component {
  constructor(props) {
    super(props);
    this.renderConstraints = this.renderConstraints.bind(this);
    this.setClasses = this.setClasses.bind(this);
    this.renderTypes = this.renderTypes.bind(this);
    this.state = {
      classes: [],
      types: ["TA", "Instructor"],
    };
  }
  componentDidMount() {
    this.setClasses();
  }
  setClasses() {
    const classes = getCourses().map((c) => c.title);
    this.setState({ classes });
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.saveNewResource();
  };
  addConstraints = () => {
    const constraints = [...this.props.resource.constraints];
    if (constraints.findIndex((c) => c === " ") === -1) {
      constraints.push(" ");
      this.props.saveInput(constraints, "constraints");
    }
  };
  renderTypes() {
    const { types } = this.state;
    const { saveInput } = this.props;
    return (
      <select
        onChange={({ target }) => {
          saveInput(target.value, "type");
        }}
      >
        <option key="blank"></option>
        {types.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
    );
  }
  renderConstraints() {
    const { saveInput, resource } = this.props;
    const { constraints } = resource;
    if (constraints) {
      return constraints.map((c) => {
        return (
          <select
            key={c}
            value={`${c}`}
            onChange={({ target }) => {
              saveInput(target.value.trim(), "constraints", c);
            }}
          >
            <option key={"blank"}></option>
            {this.state.classes.map((course) => {
              return <option key={course}>{course}</option>;
            })}
          </select>
        );
      });
    }
  }
  render() {
    const { saveInput, resource } = this.props;
    const { constraints } = this.state;
    return (
      <form
        onSubmit={(e) => {
          this.submitForm(e);
        }}
      >
        <div className="card">
          <div className="card-header text-white p-3 border text-center fs-3  ">
            <input
              id="name"
              onChange={({ target }) => {
                saveInput(target.value, "name");
              }}
              className="col-md-8"
              placeholder="Name"
            />
          </div>
          <div className="card-body text-wrap">
            {this.renderTypes()}
            <br></br>
            <input
              onChange={({ target }) => {
                saveInput(target.value, "availability");
              }}
              id="availability"
              type="text"
              placeholder="Availability..."
            />
            <br></br>
            <label>Add Constraints</label>
            <button type="button" onClick={this.addConstraints}>
              Add
            </button>
            <ul>{this.renderConstraints()}</ul>
          </div>
          <div className="card-footer">
            <button>Save</button>
          </div>
        </div>
      </form>
    );
  }
}

export default BlankResourceCard;
