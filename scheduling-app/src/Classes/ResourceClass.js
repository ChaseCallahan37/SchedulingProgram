import { v4 as uuidv4 } from "uuid";
import Day from "./DayClass";

class Resource {
  constructor(
    resourceFields = {
      id: uuidv4(),
      type: "",
      name: "",
      availability: [
        new Day(""),
        new Day("Tuesday"),
        new Day("Wednesday"),
        new Day("Thursday"),
        new Day("Friday"),
      ],
      constraints: { classSize: "", teachingStyle: "" },
    }
  ) {
    const { id, type, name, availability, constraints } = resourceFields;
    this.id = id;
    this.type = type; // ta or instructor
    this.name = name; // name of the individual
    this.availability = availability; // time and day they are able to teach/ta
    this.constraints = constraints; // classes the individual is qualified to teach/ta
  }
  updateFileds = (fields) => {
    const updates = Object.keys(fields);
    const validUpdates = Object.keys(this);
    updates.forEach((update) => {
      if (validUpdates.includes(update)) {
        this[update] = fields[update];
      }
    });
  };
}

export default Resource;
