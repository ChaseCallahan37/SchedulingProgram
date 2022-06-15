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
    this.renderAvailability = this.renderAvailability.bind(this);
    this.state = {
      classes: [],
      types: ["TA", "Instructor"],
      times: [
        800, 815, 830, 845, 900, 915, 930, 945, 1000, 1015, 1030, 1045, 1100,
        1115, 1130, 1145, 1200, 1215, 1230, 1245, 1300, 1315, 1330, 1345, 1400,
        1415, 1430, 1445, 1500, 1515, 1530, 1545, 1600, 1615, 1630, 1645, 1700,
      ],
      availability: [
        {
          day: "monday",
          times: {
            start: 0,
            end: 0,
          },
        },
        {
          day: "tuesday",
          times: {
            start: 0,
            end: 0,
          },
        },
        {
          day: "wednesday",
          times: {
            start: 0,
            end: 0,
          },
        },
        {
          day: "thursday",
          times: {
            start: 0,
            end: 0,
          },
        },
        {
          day: "friday",
          times: {
            start: 0,
            end: 0,
          },
        },
      ],
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
  updateAvailability(day, point, value) {
    const availability = [...this.state.availability];
    const updatedDay = availability.find((a) => a.day === day.day);
    if (updatedDay) {
      updatedDay.times[point] = value;
      this.setState({ availability });
    }
    this.props.saveInput(availability, "availability");
  }
  renderAvailabilityTimes(day) {
    return (
      <div>
        <select
          onChange={(e) => {
            this.updateAvailability(day, "start", e.target.value);
          }}
        >
          {this.state.times.map((t) => {
            return <option key={t}>{t}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            this.updateAvailability(day, "end", e.target.value);
          }}
        >
          {this.state.times.map((t) => {
            return <option key={t}>{t}</option>;
          })}
        </select>
      </div>
    );
  }
  renderAvailability() {
    return this.state.availability.map((day) => {
      return (
        <div>
          <label>{day.day}</label>
          {this.renderAvailabilityTimes(day)}
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
            {this.renderAvailability()}
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
