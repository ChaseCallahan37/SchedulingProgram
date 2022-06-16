import { v4 as uuidv4 } from "uuid";
import Availability from "./availability-class";

class Course {
  constructor({
    id = uuidv4(),
    title,
    info,
    availability = new Availability(),
    resources = [],
  }) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.availability = availability;
    this.resources = resources;
  }
}

export default Course;
