import React, { useState, useEffect } from "react";
import { getCourses, sendCourse } from "../../AppInfo/CourseInfo";
import Card from "../common/Card";
import {
  GETCourses,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../../Utils/Requests/CourseCalls";
import Course from "../../Classes/CourseClass";
import Calendar from "../common/Calendar";
import CardPopup from "../common/CardPopup";
import { checkIsPromise } from "../../Utils/UtilFunctions";

const CourseTable = () => {
  const [courses, setCourses] = useState(null);
  const [showBlank, setShowBlank] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newCourse, setNewCourse] = useState(new Course());

  const onStart = async () => {
    const pulledCourses = await GETCourses();
    setCourses(pulledCourses);
  };
  onStart();

  const pullCourses = async () => {
    const pulledCourses = await GETCourses();
    const filteredCourses = checkEditCourse(pulledCourses);
    setCourses(filteredCourses);
    // setCourses(pulledCourses);
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
      const editCourse = coursesCopy.find((course) => course.id === id);
      setNewCourse(editCourse);
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

    const pulledCourses = await GETCourses();
    setCourses(pullCourses);
  };
  const handleDelete = (id) => {
    deleteCourse(id);
  };
  const handleCloseModal = async () => {
    setNewCourse(new Course());
    setShowBlank(false);
    const pulledCourses = await GETCourses();
    setCourses(pulledCourses);
  };
  const updateNewClass = (field, content) => {
    const newCourse = { ...newCourse };
    newCourse[field] = content;
    setNewCourse(newCourse);
  };

  return (
    <div>
      <div className="d-md-flex justify-content-md-end">
        <button className="button" onClick={() => setShowBlank(true)}>
          Add Course
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {courses &&
          !checkIsPromise(courses) &&
          courses.map((course) => <Card item={course} onEdit={handleEdit} />)}
        {showBlank && (
          <CardPopup
            open={true}
            item={newCourse}
            update={handleOnChange}
            save={handleSaveCourse}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default CourseTable;
