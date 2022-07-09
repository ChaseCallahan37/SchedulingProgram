import React, { useState, useEffect } from "react";
import { getCourses, sendCourse } from "../../AppInfo/CourseInfo";
import Card from "../Common/Card";
import ShowAvailability from "../Common/ShowAvailability";
import BlankAvailability from "../Common/BlankAvailability";
import { GETCourses } from "../../Utils/SchedulingApi";
import Course from "../../Classes/CourseClass";

const CourseTable = () => {
  const [courses, setCourses] = useState(null);
  const [showBlank, setShowBlank] = useState(false);
  const [newCourse, setNewCourse] = useState(new Course());

  useEffect(() => {
    if (courses === null) {
      const pulledCourses = getCourses();
      setCourses(pulledCourses);
    }
  });
  const handleOnChange = ({ name, value }) => {
    setNewCourse({ ...newCourse, [name]: value });
  };
  const handleEdit = (id) => {
    if (!showBlank) {
      const coursesCopy = [...courses];
      const index = coursesCopy.findIndex((course) => course.id === id);
      const newCourse = coursesCopy.splice(index, 1)[0];
      setNewCourse(newCourse);
      setShowBlank(true);
      setCourses(coursesCopy);
    }
  };
  const saveCourse = () => {
    const data = { ...newCourse };
    sendCourse(data);
    const pulledCourses = getCourses();
    setCourses(pulledCourses);
    setShowBlank(false);
    setNewCourse(new Course());
  };
  const updateNewClass = (field, content) => {
    const newCourse = { ...newCourse };
    newCourse[field] = content;
    setNewCourse(newCourse);
  };

  return (
    <div>
      <div className="d-md-flex justify-content-md-end">
        <button
          className="button"
          onClick={() => {
            !showBlank && setShowBlank(true);
          }}
        >
          Add Course
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {courses !== null &&
          courses.map((course) => (
            <Card
              key={course.title}
              update={(e) => handleOnChange(e.target)}
              content={{
                header: [<label key="header1">{course.title}</label>],
                body: [
                  <p key="body1">{course.info}</p>,

                  <label key="body2" className="label">
                    Availability:
                  </label>,

                  <ShowAvailability
                    key="body3"
                    availability={course.availability}
                  />,
                ],
                footer: [
                  <button
                    id={course.id}
                    onClick={(e) => handleEdit(e.target.id)}
                    className="button"
                    key="footer1"
                  >
                    Edit
                  </button>,
                ],
              }}
            />
          ))}
        {showBlank && (
          <Card
            key={newCourse.id}
            content={{
              header: [
                <input
                  key="header1"
                  className="col-md-8"
                  type="text"
                  name="title"
                  value={newCourse.title}
                  placeholder="Name"
                  onChange={(e) => handleOnChange(e.target)}
                ></input>,
              ],
              body: [
                <span key="body1" className="input-group-text">
                  Course Info
                </span>,

                <textarea
                  key="body2"
                  name="info"
                  value={newCourse.info}
                  onChange={(e) => handleOnChange(e.target)}
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>,

                <BlankAvailability
                  key="body3"
                  availability={newCourse.availability}
                  update={(e) => handleOnChange(e.target)}
                />,
              ],
              footer: [
                <button className="button" key="footer1" onClick={saveCourse}>
                  Save
                </button>,
              ],
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CourseTable;
