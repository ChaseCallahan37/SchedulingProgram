import React, { Component } from "react";
import { addResource } from "../../app-info/resource-info";
import ResourceTable from "../tables/resources-table";

//Shows a blank card in the form and allows user to add course information

//Thoughts on how to go about formatting the blank card, feel free to delete it if you dont like it. -CC

class BlankResourceCard extends Component {
  state = {
    resource: {
      name: "",
      type: "",
      availability: "",
      constraints: [],
    },
  };
  submitForm = (e) => {
    e.preventDefault();
    addResource({ ...this.state.resource });
  };
  saveInput(e, field) {
    const resource = { ...this.state.resource };
    resource[field] = e.target.value;
    this.setState(() => {
      return { resource };
    });
  }
  render() {
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
              onChange={(e) => {
                this.saveInput(e, "name");
              }}
              className="col-md-8"
              placeholder="Name"
            />
          </div>
          <div className="card-body text-wrap">
            <input
              onChange={(e) => {
                this.saveInput(e, "type");
              }}
              id="type"
              type="text"
              placeholder="Type..."
            />
            <br></br>
            <input
              onChange={(e) => {
                this.saveInput(e, "availability");
              }}
              id="availability"
              type="text"
              placeholder="Availability..."
            />
            <br></br>
            <input
              onChange={(e) => {
                this.saveInput(e, "constraints");
              }}
              id="constraints"
              type="text"
              placeholder="Constraints..."
            />
            <ul>
              <li>
                <input ></input>
              </li>
            </ul>
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
