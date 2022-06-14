import { v4 as uuidv4 } from "uuid";

class Course {
  constructor({ id = uuidv4(), title, info, resources = [] }) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.resources = resources;
  }
}

export default Course;
