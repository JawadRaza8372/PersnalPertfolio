import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../Componenets/Navbar/Navbar";
import Aboutus from "../Pages/Aboutus/Aboutus";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import { useSelector } from "react-redux";
import Projects from "../Pages/Projects/Projects";
import ProjectId from "../Pages/ProjectId/ProjectId";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ScrollToTop from "react-scroll-to-top";

function Routes() {
  return (
    <>
      <Navbar />
      <ScrollToTop
        style={{ background: "#2e2e35", padding: "6px" }}
        smooth
        color="#6688d7"
      />

      <Switch>
        <Route exact path="/" component={Home} />
        <GuestdRoute exact path="/login">
          <Login />
        </GuestdRoute>
        <ProtectedRoute exact path="/Dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/aboutMe" component={Aboutus} />

        <ProjectRoute exact path="/projects">
          <Projects />
        </ProjectRoute>
        <ProjectRoute exact path="/project/:id">
          <ProjectId />
        </ProjectRoute>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}
let ProtectedRoute = ({ children, ...res }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...res}
      render={() => {
        return !isAuth ? <Redirect to="/login" /> : children;
      }}
    ></Route>
  );
};
let ProjectRoute = ({ children, ...res }) => {
  const { projects } = useSelector((state) => state.project);
  return (
    <Route
      {...res}
      render={() => {
        return !projects ? <Redirect to="/" /> : children;
      }}
    ></Route>
  );
};
let GuestdRoute = ({ children, ...res }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Route
      {...res}
      render={() => {
        return isAuth ? <Redirect to="/Dashboard" /> : children;
      }}
    ></Route>
  );
};
export default Routes;
