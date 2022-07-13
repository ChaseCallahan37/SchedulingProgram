import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseTable from "../components/Tables/CourseTable";
import CourseHeader from "../components/common/Header";
import HomeTable from "../components/Tables/HomeTable";
import ResourceTable from "../components/Tables/ResourceTable";
import NotFoundTable from "../components/Tables/NotFoundTable";

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <CourseHeader />
        <Routes>
          <Route path="/" element={<HomeTable />} exact="true" />
          <Route path="/courses" element={<CourseTable />} />
          <Route path="/resources" element={<ResourceTable />}></Route>
          <Route path="*" element={<NotFoundTable />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
