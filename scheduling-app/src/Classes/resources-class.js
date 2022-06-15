import { v4 as uuidv4 } from "uuid";
import Availability from "./availability-class";

class Resource {
  constructor({
    id = uuidv4(),
    type,
    name,
    availability = new Availability(),
    constraints = [],
  }) {
    this.id = id;
    this.type = type; // ta or instructor
    this.name = name; // name of the individual
    this.availability = availability; // time and day they are able to teach/ta
    this.constraints = constraints; // classes the individual is qualified to teach/ta
  }
}

export default Resource;
