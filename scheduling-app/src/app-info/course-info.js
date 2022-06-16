import Course from "./../Classes/course-class";
import { createBlankAvailability } from "./../Classes/availability-class";

const MIS221Avail = [
  {
    day: "monday",
    times: {
      start: 1000,
      end: 1200,
    },
  },
  {
    day: "tuesday",
    times: {
      start: 1500,
      end: 1700,
    },
  },
];

const MIS321Avail = [
  {
    day: "wednesday",
    times: {
      start: 900,
      end: 1100,
    },
  },
  {
    day: "tuesday",
    times: {
      start: 1130,
      end: 1545,
    },
  },
];

let courses = [
  new Course({
    title: "MIS 221",
    info: "This course covers coding and such",
    availability: createBlankAvailability([...MIS221Avail]),
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 321",
    info: "Here we talk about more coding",
    availability: createBlankAvailability([...MIS321Avail]),
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
