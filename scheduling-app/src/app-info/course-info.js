import Course from "./../Classes/course-class";
import { createBlankAvailability } from "./../Classes/availability-class";
import Time from "../Classes/TimeClass";

const MIS221Avail = [
  {
    day: "monday",
    times: {
      start: new Time({
        hour: "10",
        minute: "30",
      }),
      end: new Time({
        hour: "3",
        minute: "45",
      }),
    },
  },
];

const MIS321Avail = [
  {
    day: "wednesday",
    times: {
      start: new Time({
        hour: "8",
        minute: "30",
      }),
      end: new Time({
        hour: "5",
        minute: "45",
      }),
    },
  },
];

let courses = [
  new Course({
    title: "MIS 221",
    info: "This course covers coding and such",
    availability: [
      {
        title: "monday",
        times: {
          start: new Time({
            hour: "10",
            minute: "30",
          }),
          end: new Time({
            hour: "3",
            minute: "45",
          }),
        },
      },
    ],
    resources: ["Insert Resources"],
  }),
  new Course({
    title: "MIS 321",
    info: "Here we talk about more coding",
    availability: [
      {
        title: "wednesday",
        times: {
          start: new Time({
            hour: "8",
            minute: "30",
          }),
          end: new Time({
            hour: "5",
            minute: "45",
          }),
        },
      },
    ],
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
