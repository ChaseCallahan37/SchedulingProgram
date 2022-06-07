import React, { Component } from "react";

//Where all of the course cards will live
class CourseBox extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header text-white p-3 border text-center fs-3 ">
          {this.props.course && this.props.course.title} 
        </div> 
        <div className="card-body text-wrap">Class Information Goes here</div>
        <div className="card-footer">Buttons might go here</div>
      </div>
    );
  }
}//should add a this.props.course.section, and maybe a full major name 

export default CourseBox;

//{style={{"backgroundColor: #B20837"}} style ={{"width: 200"}} } //Should 
