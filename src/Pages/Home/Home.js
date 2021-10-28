import React, { useLayoutEffect, useEffect } from "react";
import "./Home.scss";
import logo from "../../ownAssests/myProfile.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CustomCard from "../../Componenets/Card/CustomCard";
import ContactBox from "../../Componenets/ContactBox/ContactBox";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
function Home() {
  const { projects } = useSelector((state) => state.project);
  const customProjects = projects?.length > 6 ? projects.slice(0, 6) : projects;
  const hashlocation = useHistory().location.hash;
  const location = useHistory();

  useEffect(() => {
    if (hashlocation) {
      const id = hashlocation.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, [hashlocation]);
  useLayoutEffect(() => {
    if (hashlocation) {
      const id = hashlocation.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, []);
  return (
    <>
      <section className="sectionhome">
        <div className="homerow">
          <div className="homecol">
            <h1>
              Jawad
              <br />
              Raza.
            </h1>
            <div>
              <a
                className="socio"
                href="https://www.instagram.com/muhammad_jawadraza_dev/"
              >
                instagram
              </a>
              <a
                className="socio second"
                href="https://www.linkedin.com/in/muhammad-jawad-raza-119a23203/"
              >
                linkdin
              </a>
            </div>
            <a href="#contact" className="contactMeButon">
              Contact Me
            </a>
          </div>
          <div className="homecol">
            <img src={logo} alt="M Jawad Raza" />
          </div>
          <div className="homecol">
            <p className="heading">introduction</p>
            <h1>
              UI/UX developer, MERN
              <br />
              Stack Web Developer
            </h1>
            <p>
              Hi there, I'm Muhammmad Jawad Raza.👋 I'm a React Js Developer!!.
              🌱 I’m currently learning everything 🤣. ⚡ React is Not a
              Framework, But a JavaScript Library. ⚡ Fun fact: I love Traveling
              But not travelled too much.
            </p>
            <span onClick={() => location.push("/aboutme")}>
              Learn More <ArrowForwardIcon />
            </span>
          </div>
        </div>
      </section>
      <section className="section portfolio" id="portfolio">
        <p className="heading">portfolio</p>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          My Masterpiece Collection
        </h1>
        <div className="homerowOne">
          {customProjects &&
            customProjects.map((data) => (
              <CustomCard key={data.id} data={data} />
            ))}
        </div>

        {projects?.length > 6 ? (
          <sapn
            onClick={() => location.push("/projects")}
            className="span navlink"
          >
            View More <ArrowForwardIcon />
          </sapn>
        ) : null}
      </section>
      <section
        className="sectionhome2 portfolio"
        style={{ marginTop: 40 }}
        id="contact"
      >
        <p className="heading" style={{ marginTop: "120px", color: "white" }}>
          Contact Us
        </p>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          I’d love To Get In Touch With You Via Web Or Other Social Media
          Handles
        </h1>
        <div className="homerowtwo">
          <ContactBox />
        </div>
      </section>
    </>
  );
}

export default Home;
