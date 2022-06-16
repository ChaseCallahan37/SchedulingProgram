import React, { Component } from "react";
import { addCourse } from "../../app-info/course-info";
import AvailabilityList from "../common/availability-list";
import CourseTable from "../tables/course-table";

//Shows a blank card in the form and allows user to add course information

//Thoughts on how to go about formatting the blank card, feel free to delete it if you dont like it. -CC

class BlankCard extends Component {
  state = {};
  submitForm = (e) => {
    e.preventDefault();
    this.props.saveClass();
  };
  render() {
    const { updateNewClass, course, saveClass } = this.props;
    return (
      <form
        onSubmit={(e) => {
          this.submitForm(e);
        }}
      >
        <div className="card">
          <div className="card-header text-white p-3 border text-center fs-3  ">
            <input
              onChange={(e) => {
                updateNewClass("title", e.target.value);
              }}
              className="col-md-8"
              placeholder="Class Name"
            />
          </div>
          <div className="card-body text-wrap">
            <span className="input-group-text">Course info</span>
            <textarea
              onChange={(e) => {
                updateNewClass("info", e.target.value);
              }}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
          <AvailabilityList course={course} updateNewClass={updateNewClass} />
          <div className="card-footer">
            <button
              onClick={() => {
                saveClass();
              }}
            >
              Save Course
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default BlankCard;
