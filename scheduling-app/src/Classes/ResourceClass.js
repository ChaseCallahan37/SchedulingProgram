import { v4 as uuidv4 } from "uuid";
import Day from "./DayClass";

class Resource {
  constructor(
    resourceFields = {
      id: uuidv4(),
      name: "",
      type: "",
      subType: "",
      availability: [],
      constraints: [],
    }
  ) {
    const { id, type, name, availability, constraints, subType } =
      resourceFields;
    this.id = id;
    this.name = name; // name of the individual
    this.type = type; // ta or instructor
    this.availability = availability;
    this.subType = subType; // ta or instructor
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
