import React, { Component } from "react";
import { addCourse } from "../../app-info/course-info";
import CourseTable from "../tables/course-table";

//Shows a blank card in the form and allows user to add course information

//Thoughts on how to go about formatting the blank card, feel free to delete it if you dont like it. -CC

class BlankCard extends Component {
  state = {};
  submitForm = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <form
        onSubmit={(e) => {
          this.submitForm(e);
        }}
      >
        <div className="card">
          <div className="card-header text-white p-3 border text-center fs-3  ">
            <input className ="col-md-8" placeholder="Class Name" />
          </div>
          <div className="card-body text-wrap">
            <span className ="input-group-text" >Course info</span>
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
          <div className="card-footer">
            <button>Save Course</button>
          </div>
        </div>
      </form>
    );
  }
}

export default BlankCard;
