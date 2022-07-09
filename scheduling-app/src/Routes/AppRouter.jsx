import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseTable from "../components/Tables/CourseTable";
import CourseHeader from "../components/Common/Header";
import HomeTable from "../components/Tables/HomeTable";
import ResourceTable from "../components/Tables/ResourceTable";

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
