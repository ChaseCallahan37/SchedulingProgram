import { v4 as uuidv4 } from "uuid";
import Day from "./DayClass";

class Course {
  constructor(
    courseFields = {
      id: uuidv4(),
      name: "",
      teachingStyle: "",
      info: "",
      availability: [],
      resources: {
        instructors: 0,
        tas: 0,
      },
    }
  ) {
    const { id, name, teachingStyle, info, availability, resources } =
      courseFields;
    this.id = id;
    this.name = name;
    this.teachingStyle = teachingStyle;
    this.info = info;
    this.availability = availability;
    this.resources = resources;
  }
}

export default Course;
