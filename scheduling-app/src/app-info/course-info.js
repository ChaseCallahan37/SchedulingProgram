let courses = [
  {
    title: "MIS 221",
    info: "This course covers coding and such",
    tas: 8,
  },
  {
    title: "MIS 321",
    info: "Here we talk about more coding",
    tas: 4,
  },
  {
    title: "MIS 421",
    info: "Here we talk about advanced coding ",
    tas: 2,
  },
  {
    title: "MIS 500",
    info: "This is a course I made up",
    tas: 1,
  },
  {
    title: "MIS 501",
    info: "The second course that I made up",
    tas: 1,
  },
  {
    title: "MIS 502",
    info: "The most fake course there is",
    tas: 1,
  },
];

export const getCourses = () => {
  return [...courses];
};

export const addCourse = (newCourse) => {
  courses.push(newCourse);
};
