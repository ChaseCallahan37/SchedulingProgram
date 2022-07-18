import { v4 as uuidv4 } from "uuid";
import Day from "./DayClass";

class Course {
  constructor(
    courseFields = {
      id: uuidv4(),
      name: "",
      info: "",
      availability: [],
      resources: [],
    }
  ) {
    const { id, name, info, availability, resources } = courseFields;
    this.id = id;
    this.name = name;
    this.info = info;
    this.availability = availability;
    this.resources = resources;
  }
}

export default Course;
