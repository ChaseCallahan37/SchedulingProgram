import Course from "../Classes/CourseClass";
import axios from "axios";

const url = "https://localhost:7262/api/course";

// const courseData = async () => {
//   const data = await fetch(url)
//     .then((data) => {
//       return data;
//     })
//     .catch((er) => {
//       console.log(er);
//     });
//   console.log(data);
// };

export const GETCourses = async () => {
  return await axios({
    url,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// export const POSTCourse = async (course) => {
//   return await fetch(url, {
//     method: "POST",
//     headers: {
//       'Accept': "*/*",
//       "Content-Type": "application/json",
//     },
//     body: "Please work",
//   });
// };

// fetch(uri, {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(item)
// })

// courseData();

// const adder = (x, y, callBack) => {
//     const secretVariale = "secret"
//     const sum = x + y
//     callBack(sum)
// }

// adder(1, 2, (data) => {
//     console.log(data)
// })

// function getJokes() {
//   const jokesUrl = "https://localhost:7262/api/course";
//   fetch(jokesUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((jokes) => {
//       console.log(jokes);
//     })
//     .catch((er) => {
//       console.log("Error!!!!", er);
//     });
// }

// getJokes();
