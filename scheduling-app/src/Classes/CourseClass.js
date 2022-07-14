import { v4 as uuidv4 } from "uuid";
import Day from "./DayClass";

class Course {
  constructor(
    courseFields = {
      id: uuidv4(),
      title: "",
      info: "",
      availability: [],
      resources: [],
    }
  ) {
    const { id, title, info, availability, resources } = courseFields;
    this.id = id;
    this.title = title;
    this.info = info;
    this.availability = availability;
    this.resources = resources;
  }
}

export default Course;
