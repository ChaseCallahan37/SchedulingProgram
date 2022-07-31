import Course from "../../Classes/CourseClass";
import axios from "axios";

// const baseUrl = "https://localhost:7262/api";
const baseUrl = "https://scheduling-api-backend.herokuapp.com/api";
export const GETCourses = async () => {
  return await axios({
    url: `${baseUrl}/course`,
    method: "GET",
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const createCourse = async (data) => {
  const res = await axios({
    url: `${baseUrl}/course`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).catch(async (err) => {
    const error = await err;
    console.log(error);
  });
  return res.data;
};

export const updateCourse = async (data) => {
  const res = await axios({
    url: `${baseUrl}/course/${data.id}`,
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  }).catch(async (err) => {
    const error = await err;
    console.log(error);
  });
  return res.data;
};

export const deleteCourse = async (id) => {
  try {
    await axios({
      url: `${baseUrl}/course/${id}`,
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (er) {
    throw new Error(er);
  }
};
