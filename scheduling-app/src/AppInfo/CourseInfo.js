import { GETCourses } from "../Utils/Requests/CourseCalls";
const _ = require("lodash");

let courses = [];

export const getCourses = async () => {
  const pulledCourses = await GETCourses();
  if (!_.isEqual(pulledCourses, courses)) {
    courses = _.cloneDeep(pulledCourses);
  }
  return pulledCourses;
};
