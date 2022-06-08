import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseTable from "../components/tables/course-table";
import CourseHeader from "../components/page-components/course-header";
import HomeTable from "../components/tables/home-table";
import ResourceTable from "./../components/tables/resources-table";

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <CourseHeader />
          <Route path="/" component={HomeTable} exact={true} />
          <Route path="/courses" component={CourseTable} />
          <Route path="/resources" component={ResourceTable}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
