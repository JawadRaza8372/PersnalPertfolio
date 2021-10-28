import React from "react";
import "./Aboutus.scss";
function Aboutus() {
  return (
    <div className="aboutsection">
      <h1>About Me</h1>
      <h3>Things that I have learned so far.</h3>
      <div>
        <div className="flow">
          <h1>Frontend Devloper</h1>
          <ul>
            <li>html</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>React-Bootstrap</li>
            <li>Material UI</li>
            <li>React JS</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="flow">
          <h1>Backend Devloper</h1>
          <ul>
            <li>Firebase</li>
            <li>Node Js</li>
            <li>Express JS</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
