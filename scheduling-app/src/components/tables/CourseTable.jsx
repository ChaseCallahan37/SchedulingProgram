import React, { useState, useEffect } from "react";
import { getCourses, sendCourse } from "../../AppInfo/CourseInfo";
import Card from "../common/Card";
import ShowAvailability from "../common/ShowAvailability";
import BlankAvailability from "../common/BlankAvailability";
import {
  GETCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../../Utils/Requests/CourseCalls";
import Course from "../../Classes/CourseClass";
import Calendar from "../common/Calendar";
import CardPopup from "../common/CardPopup";

const CourseTable = () => {
  const [courses, setCourses] = useState(null);
  const [showBlank, setShowBlank] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newCourse, setNewCourse] = useState(new Course());

  useEffect(() => {
    if (courses === null) {
      pullCourses();
    }
  });
  const pullCourses = async () => {
    const pulledCourses = await GETCourses();
    const filteredCourses = checkEditCourse(pulledCourses);
    setCourses(filteredCourses);
  };
  const checkEditCourse = (pulledCourses) => {
    return pulledCourses
      ? pulledCourses.filter((c) => c.id !== newCourse.id)
      : [];
  };
  const handleOnChange = ({ name, value }) => {
    setNewCourse({ ...newCourse, [name]: value });
  };
  const handleEdit = (id) => {
    if (!showBlank) {
      const coursesCopy = [...courses];
      const index = coursesCopy.findIndex((course) => course.id === id);
      const newCourse = coursesCopy.splice(index, 1)[0];
      setNewCourse(newCourse);
      setCourses(coursesCopy);
      setShowBlank(true);
      setIsEdit(true);
      setCourses(coursesCopy);
    }
  };
  const handleSaveCourse = async () => {
    const data = { ...newCourse };
    let createdCourse;
    if (isEdit) {
      createdCourse = await updateCourse(data);
    } else {
      createdCourse = await createCourse(data);
    }
    setShowBlank(false);
    setIsEdit(false);
    setNewCourse(new Course());

    const revisedCourses = [...courses];
    revisedCourses.push(createdCourse);
    setCourses(revisedCourses);
  };
  const handleDelete = (id) => {
    deleteCourse(id);
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
                  <Calendar availability={course.availability} />,
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
                  <button onClick={() => handleDelete(course.id)}>
                    Delete
                  </button>,
                ],
              }}
            />
          ))}

        {showBlank && (
          <CardPopup
            item={newCourse}
            update={handleOnChange}
            save={handleSaveCourse}
          />
        )}
      </div>
    </div>
  );
};

export default CourseTable;
