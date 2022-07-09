import { v4 as uuidv4 } from "uuid";
import Day from "./DayClass";

class Course {
  constructor(
    courseFields = {
      id: uuidv4(),
      title: "",
      info: "",
      availability: [
        new Day("Monday"),
        new Day("Tuesday"),
        new Day("Wednesday"),
        new Day("Thursday"),
        new Day("Friday"),
      ],
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
  setStart = (title, time) => {
    this.availability.find((avail) => {
      if (avail.title === title) {
        avail.start = time;
        return true;
      }
      return false;
    });
  };
  setEnd = (title, time) => {
    this.availability.find((avail) => {
      if (avail.title === title) {
        avail.end = time;
        return true;
      }
      return false;
    });
  };
}

export default Course;
