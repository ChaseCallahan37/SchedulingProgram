let courses = [
  {
    title: "MIS 221",
    timeAvailable: 10,
    tas: 8,
  },
  {
    title: "MIS 321",
    timeAvailable: 8,
    tas: 4,
  },
  {
    title: "MIS 421",
    timeAvailable: 7,
    tas: 2,
  },
  {
    title: "MIS 500",
    timeAvailable: 5,
    tas: 1,
  },{
    title: "MIS 500",
    timeAvailable: 5,
    tas: 1,
  },{
    title: "MIS 500",
    timeAvailable: 5,
    tas: 1,
  }
];

export const getCourses = () => {
  return [...courses];
};

export const addCourse = (newCourse) => {
  courses.push(newCourse);
};
