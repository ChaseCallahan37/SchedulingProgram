import Course from "../Classes/CourseClass";
import axios from "axios";

const url = "https://localhost:7262/api/course";

export const GETCourses = async () => {
  return await axios({
    url,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const POSTCourse = (data) => {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
