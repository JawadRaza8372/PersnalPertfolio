import React from "react";
import "./Projects.scss";
import { useSelector } from "react-redux";
import CustomCard from "../../Componenets/Card/CustomCard";
function Projects() {
  const { projects } = useSelector((state) => state.project);
  return (
    <div className="container">
      <h2 className="projectHead mb-15">My Projects</h2>
      <div className="projectsGrid">
        {projects &&
          projects.map((data) => <CustomCard key={data.id} data={data} />)}
      </div>
    </div>
  );
}

export default Projects;
