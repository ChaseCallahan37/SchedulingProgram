import Course from "../../Classes/CourseClass";
import axios from "axios";
import getEnum from "../Enums";

const baseUrl = "https://localhost:7262/api";
// const baseUrl = "https://scheduling-api-backend.herokuapp.com/api";
export const GETCourses = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/course`,
      method: "GET",
    });
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const createCourse = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/course`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return await response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const updateCourse = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/course/${data.id}`,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return await response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const deleteCourse = async (id) => {
  try {
    const response = await axios({
      url: `${baseUrl}/course/${id}`,
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};
