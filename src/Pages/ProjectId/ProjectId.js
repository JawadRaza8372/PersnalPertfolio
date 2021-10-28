import React from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { useSelector } from "react-redux";
import "./ProjectId.scss";
import ErrorPage from "../ErrorPage/ErrorPage";
function ProjectId() {
  const location = useHistory();
  const { id } = useParams();
  const { projects } = useSelector((state) => state.project);
  const myProject =
    projects &&
    projects?.find((dat) => {
      return dat.id === id;
    });
  console.log(myProject);
  if (!myProject) {
    return <ErrorPage />;
  }
  return (
    <div className="container">
      <div className="idProject">
        <div className="projectGrid">
          <img
            src={
              myProject?.data?.imge
                ? `${myProject?.data?.imge}`
                : "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
            }
            alt="jh"
          />
          <div className="secondDiv">
            <h1>{myProject?.data?.title}</h1>
            <p>{myProject?.data?.subtitle}</p>
            <a href={`${myProject?.data?.weblink}`}>Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectId;
