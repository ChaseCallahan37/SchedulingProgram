import React, { Component } from "react";

//Where all of the course cards will live
class CourseBox extends Component {
  constructor(props) {
    super(props);
    this.renderAvailability = this.renderAvailability.bind(this);
    this.state = {};
  }
  renderAvailability() {
    const { availability } = this.props.course;
    if (availability.days) {
      return availability.days.map((d) => {
        return (
          <div className="saved-availability" key={d.day}>
            <label className="saved-day">{d.day}</label>
            <div className="saved-time">
            {!!d.times && <label className="saved-start-time"> Start: {d.times.start}</label>}
            {!!d.times && <label> End: {d.times.end}</label>}
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className="card">
        <div className="card-header text-white p-3 border text-center fs-3 ">
          {this.props.course && this.props.course.title}
        </div>
        <div className="card-body text-wrap">{this.props.course.info}</div>
        <div className="card-body text-wrap">
          Resources:{" "}
          {this.props.course.resources &&
            this.props.course.resources.map((resource) => `${resource} `)}
        </div>
        <label className="label">Availability:</label>
        {this.renderAvailability()}
        <div className="card-footer">
          <button>Edit</button>
        </div>
      </div>
    );
  }
} //should add a this.props.course.section, and maybe a full major name

export default CourseBox;

//{style={{"backgroundColor: #B20837"}} style ={{"width: 200"}} } //Should
