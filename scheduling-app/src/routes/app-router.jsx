import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import CoursePage from "../components/pages/course-page";
import ResourcePage from "../components/pages/resources-page";
import CourseHeader from "../components/page-components/course-header";

class AppRouter extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <CourseHeader />
          <Switch>
            <Route path="/" component={CoursePage} exact={true} />
            <Route path="/resources" component={ResourcePage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
