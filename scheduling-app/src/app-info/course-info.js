import { v4 as uuidv4 } from "uuid";

let courses = [
  {
    id: uuidv4(),
    title: "MIS 221",
    info: "This course covers coding and such",
    tas: 8,
  },
  {
    id: uuidv4(),
    title: "MIS 321",
    info: "Here we talk about more coding",
    tas: 4,
  },
  {
    id: uuidv4(),
    title: "MIS 421",
    info: "Here we talk about advanced coding ",
    tas: 2,
  },
  {
    id: uuidv4(),
    title: "MIS 500",
    info: "This is a course I made up",
    tas: 1,
  },
  {
    id: uuidv4(),
    title: "MIS 501",
    info: "The second course that I made up",
    tas: 1,
  },
  {
    id: uuidv4(),
    title: "MIS 502",
    info: "The most fake course there is",
    tas: 1,
  },
];

export const getCourses = () => {
  return [...courses];
};

export const saveCourse = (newCourse) => {
  const duplicate = courses.find((course) => course.id === newCourse.id);
  if (!duplicate) {
    courses.push(newCourse);
  }
};

export const createBlankCourse = () => {
  const newCourse = {
    id: null,
    title: "",
    info: "",
    tas: 0,
  };
  return { ...newCourse };
};
