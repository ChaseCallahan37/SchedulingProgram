import React, { Component } from "react";
import { addResource } from "../../app-info/resource-info";
import { createBlankAvailability } from "../../Classes/availability-class";
import ResourceTable from "../tables/resources-table";
import { getCourses } from "./../../app-info/course-info";
import AvailabilityList from "../common/availability-list";
import Time from "../scheduling-app/src/Classes/TimeClass";

//Shows a blank card in the form and allows user to add course information

//Thoughts on how to go about formatting the blank card, feel free to delete it if you dont like it. -CC

class BlankResourceCard extends Component {
  constructor(props) {
    super(props);
    this.renderConstraints = this.renderConstraints.bind(this);
    this.setClasses = this.setClasses.bind(this);
    this.renderTypes = this.renderTypes.bind(this);
    this.renderAvailability = this.renderAvailability.bind(this);
    this.setDays = this.setDays.bind(this);
    this.state = {
      classes: [],
      types: ["TA", "Instructor"],
      times: [
        800, 815, 830, 845, 900, 915, 930, 945, 1000, 1015, 1030, 1045, 1100,
        1115, 1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1400,
        1415, 1430, 1445, 1500, 1515, 1530, 1545, 1600, 1615, 1630, 1645, 1700,
      ],
      days: [],
    };
  }
  componentDidMount() {
    this.setClasses();
    this.setDays();
  }
  setDays() {
    const days = [...createBlankAvailability().days];
    this.setState({ days });
  }
  setClasses() {
    const classes = getCourses().map((c) => c.title);
    this.setState({ classes });
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.saveNewResource();
    this.setDays();
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
  updateAvailability(d, field, value) {
    const days = [...this.state.days];
    const updatedDay = days.find((day) => day.day === d.day);
    if (updatedDay) {
      updatedDay.times[field] = value;
      this.setState({ days });
    }
    const availability = createBlankAvailability(days);
    this.props.saveInput(availability, "availability");
  }
  renderAvailabilityTimes(d) {
    return (
      <div>
        <select
          onChange={(e) => {
            this.updateAvailability(d, "start", e.target.value);
          }}
        >
          {" "}
          <option key="blank"></option>
          {this.state.times.map((t) => {
            return <option key={t}>{t}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            this.updateAvailability(d, "end", e.target.value);
          }}
        >
          {" "}
          <option key="blank"></option>
          {this.state.times.map((t) => {
            return <option key={t}>{t}</option>;
          })}
        </select>
      </div>
    );
  }
  renderAvailability() {
    return this.state.days.map((d) => {
      return (
        <div key={d.day}>
          <label>{d.day}</label>
          {this.renderAvailabilityTimes(d)}
        </div>
      );
    });
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
    const { constraints, days } = this.state;
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
            <br key="1"></br>
            <AvailabilityList item={resource} update={saveInput} />
            <br key="2"></br>
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
