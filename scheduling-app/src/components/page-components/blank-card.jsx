import React, { Component } from "react";
import { addCourse } from "../../course-info/course-info";
import CourseTable from "./course-table";

//Shows a blank card in the form and allows user to add course information

class BlankCard extends Component {
    state = {  }
    saveCourse(){
        const newCourse = {title: "test"}

        addCourse(newCourse)
    } 
    render() { 
        this.saveCourse()
        return (
            <div>Blank Card</div>
        );
    }
}
 
export default BlankCard;

