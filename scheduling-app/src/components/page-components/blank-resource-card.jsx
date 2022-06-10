import React, { Component } from "react";
import { addResource } from "../../app-info/resource-info";
import ResourceTable from "../tables/resources-table";

//Shows a blank card in the form and allows user to add course information

//Thoughts on how to go about formatting the blank card, feel free to delete it if you dont like it. -CC

class BlankResourceCard extends Component {
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
            <input className ="col-md-8" placeholder="Name" />
          </div>
          <div className="card-body text-wrap">
            <input type="text" placeholder="Type..."/><br></br>
            <input type="text" placeholder="Availability..."/><br></br>
            <input type="text" placeholder="Constraints..."/>
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