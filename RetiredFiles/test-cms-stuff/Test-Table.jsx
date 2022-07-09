import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import BlankCard from "../../scheduling-app/src/components/page-components/blank-card";
import CourseBox from "../../scheduling-app/src/components/page-components/course-box";
import {
  createBlankAvailability,
  getBlankAvailability,
} from "../../scheduling-app/src/Classes/AvailabilityClass";
import {
  getCourses,
  saveCourse,
  createBlankCourse,
} from "../../scheduling-app/src/app-info/course-info";
import Card from "../../scheduling-app/src/components/common/Card";
import AvailabilityList from "../../scheduling-app/src/components/common/availability-list";
import ShowAvailability from "../../scheduling-app/src/components/common/ShowAvailability";
import BlankAvailability from "../../scheduling-app/src/components/common/BlankAvailability";
import { relativeTimeThreshold } from "moment";
import Modal from "react-modal";
import E from "./EventClass";

class TestTable extends Component {
  state = {
    attributes: {
      header: [],
      body: [],
      footer: [],
    },
    renderFieldHead: false,
    renderFieldBody: false,
    renderFieldFoot: false,
  };
  handleAddField = (e) => {
    const { name } = e.target;
    const { renderFieldHead, renderFieldBody, renderFieldFoot } = this.state;
    if (name === "header") {
      this.setState((prevState) => ({ renderFieldHead: !renderFieldHead }));
    } else if (name === "body") {
      this.setState((prevState) => ({ renderFieldBody: !renderFieldBody }));
    } else if (name === "footer") {
      this.setState((prevState) => ({ renderFieldFoot: !renderFieldFoot }));
    }
    console.log(this.state);
  };
  renderAddField = () => {
    return (
      <div>
        <input></input>
      </div>
    );
  };
  nestWithDivAndLabel = (title, element) => {
    return (
      <div>
        {element}
        <label>{title}</label>
      </div>
    );
  };
  createElement = (item) => {
    switch (item.type) {
      case "input":
        return (
          <div>
            <label>{item.title}</label>
            <input placeholder={item.value} />
          </div>
        );
        break;
      case "h1":
        return (
          <div>
            <label>{item.title}</label>
            <h1>{item.value}</h1>
          </div>
        );
        break;
      case "label":
        return (
          <div>
            <label>{item.title}</label>
            <label>{item.value}</label>
          </div>
        );
        break;
      case "textarea":
        return (
          <div>
            <label>{item.title}</label>
            <textarea value={item.value}></textarea>
          </div>
        );
        break;
      default:
        return (
          <div>
            <label>{item.title}</label>
            <p>{item.value}</p>
          </div>
        );
    }
  };

  render() {
    const { renderFieldHead, renderAddField } = this.state;
    const { events } = E;
    const content = { header: [], body: [], footer: [] };
    events.forEach((event) => {
      content.header.push(
        this.createElement({ value: event.title, type: "h1", title: "Title" })
      );
      event.attributes.forEach((attribute) => {
        switch (attribute.placement) {
          case "header":
            content.header.push(this.createElement(attribute));
            break;
          case "body":
            content.body.push(this.createElement(attribute));
            break;
          case "footer":
            content.footer.push(this.createElement(attribute));
            break;
        }
      });
    });
    return (
      <div>
        <Card content={content} />
      </div>
    );
  }
}

export default TestTable;
