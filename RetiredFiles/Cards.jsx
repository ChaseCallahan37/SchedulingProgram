import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import TestCard from "./TestCard";
// import Time from "../../Classes/TimeClass";

const ShowAvailability = (props) => {
  const { availability } = props;
  return (
    <div>
      {availability.schedule.map((day) => (
        <div className="saved-availability" key={day.title}>
         
          <label className="saved-day">{day.title}</label>
          <div className="saved-time">
            
            {!!day.times && (
              <label className="saved-start-time">
              Start: {`${day.showStart()}`}
              </label>
            )}
            {!!day.times && <label> End: {`${day.showEnd()}`}</label>}
          </div>
        </div>
      ))}
    </div>
  );
};

class Entity {
  constructor() {
    this.id = uuidv4();
    this.attributes = [];
  }
  setAttributes = (attributes) => {
    this.attributes = attributes;
  };
  addAttribute = (field, value) => {
    this.attributes[field] = value;
  };
  editAttribute = (updates) => {
    const fields = Object.keys(updates);
    fields.forEach((field) => {
      if (this.attributes[field]) {
        this.attributes[field] = updates[field];
      }
    });
  };
}

class Time {
  constructor() {
    this.display = "";
    this.military = 0;
    this.pm = false;
  }
}

class Day {
  constructor(title = "") {
    this.title = title;
    this.times = {
      start: new Time(),
      end: new Time(),
    };
  }
  setTitle = (title) => {
    this.title = title;
  };
  setTimes = (times) => {
    this.times = times;
  };
  showStart = () => {
    return `${this.times.start.display}`;
  };
  showEnd = () => {
    return `${this.times.end.display}`;
  };
  setStart = (start) => {
    this.times.start.display = start;
  };
  setEnd = (end) => {
    this.times.end.display = end;
  };
}
class Availability {
  constructor(
    schedule = [
      new Day("Monday"),
      new Day("Tuesday"),
      new Day("Wednesday"),
      new Day("Thursday"),
      new Day("Friday"),
    ]
  ) {
    this.schedule = schedule;
  }
  setSchedule = (schedule) => {
    this.schedule = schedule;
  };
  setDay = (day) => {
    if (day.title) {
      const index = this.schedule.findIndex((d) => d.title === day.title);
      this.schedule[index] = day;
    }
  };
  getDay = (title) => {
    return this.schedule.find((day) => day.title === title);
  };
  addDay = (day) => {
    this.schedule.push(day);
  };
}

const me = new Entity();
const attributes = [
  {
    title: "name",
    value: "Chase",
    type: "h1",
    placement: "header",
  },
  {
    title: "title",
    value: "TA",
    type: "label",
    placement: "body",
    label: true,
  },
  {
    title: "availability",
    value: new Availability(),
    type: "ShowAvailability",
    placement: "body",
    label: true,
  },
  {
    title: "email",
    value: "Chasetcallahan@gmail.com",
    type: "p",
    placement: "footer",
    label: true,
  },
];

me.setAttributes(attributes);

const entities = [me];

entities[0].attributes.find((att) => {
  if (att.title === "availability") {
    debugger;
    att.value.getDay("Monday").setStart("8:00");
  }
});

class Cards extends Component {
  state = {
    list: entities,
  };
  buildElement = ({ title, value, type, label }) => {
    let el;
    switch (type) {
      case "h1":
        el = <h1>{value}</h1>;
        break;
      case "label":
        el = <label>{value}</label>;
        break;
      case "p":
        el = <p>{value}</p>;
        break;
      case "ShowAvailability":
        el = <ShowAvailability availability={value} />;
        break;
      default:
        el = <p>{value}</p>;
        break;
    }
    if (label) {
      return (
        <div>
          <label>{title}</label>
          {el}
        </div>
      );
    }
    return el;
  };
  buildContent = (attributes) => {
    const content = { header: [], body: [], footer: [] };
    attributes.forEach((attribute) => {
      switch (attribute.placement) {
        case "header":
          content.header.push(this.buildElement(attribute));
          break;
        case "body":
          content.body.push(this.buildElement(attribute));
          break;
        case "footer":
          content.footer.push(this.buildElement(attribute));
          break;
      }
    });
    return content;
  };
  render() {
    const { list } = this.state;
    return (
      <div>
        {list &&
          list.map((item) => {
            const content = this.buildContent(item.attributes);
            return <Card key={item.id} content={content} />;
          })}
      </div>
    );
  }
}

export default Cards;
