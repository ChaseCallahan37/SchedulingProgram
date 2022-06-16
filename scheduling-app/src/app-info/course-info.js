import Course from "./../Classes/course-class";
import { createBlankAvailability } from "./../Classes/availability-class";

let courses = [
  new Course({
    title: "MIS 221",
    info: "This course covers coding and such",
    availability: createBlankAvailability(),
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 321",
    info: "Here we talk about more coding",
    availability: createBlankAvailability(),
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 421",
    info: "Here we talk about advanced coding ",
    availability: createBlankAvailability(),
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 500",
    info: "This is a course I made up",
    availability: createBlankAvailability(),
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 501",
    info: "The second course that I made up",
    availability: createBlankAvailability(),
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 502",
    info: "The most fake course there is",
    availability: createBlankAvailability(),
    resources: ["Insert Resources"],
  }),
];

export const getCourses = () => {
  return [...courses];
};

export const saveCourse = (newCourse) => {
  const duplicate = courses.find((course) => course.id === newCourse.id);
  if (!duplicate) {
    courses.push(new Course(newCourse));
  }
};

export const createBlankCourse = () => {
  return new Course();
};
