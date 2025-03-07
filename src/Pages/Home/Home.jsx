import React from "react";
import logo from "../../assets/logo.jpg";
import { Card } from "../../Componnets/Card";
import { motion } from "framer-motion";
import { useState } from "react";

export const Home = () => {
  let [Ishover, setIsHover] = useState(false);

  let temporaystyle = {
    color: Ishover ? "blue" : "black",
  };
  return (
    <div className="text-white">
      <h1 className="text-center mt-4" id="home">
        Kesavan R{" "}
      </h1>
      <p className="lead text-center m-2">
        I am a passionate and dedicated Web Developer with expertise in
        full-stack development. Skilled in building user-friendly applications
        using React.js, Node.js, Express.js, and MongoDB. <br />
        <a
          href="https://drive.google.com/file/d/1p4U1sYOx2tqOG3g18uXHv74NUGmvL3N8/view?usp=sharing"
          target="blank"
          className="text center text-decoration-none text-secondary"
        >
          View Resume...
        </a>
      </p>

      <div className="text-center">
        <img
          className="img-fluid"
          src={logo}
          width={200}
          alt="Kesavan R Logo"
        />
      </div>
      <div className="row mt-4 ">
        <div className="col-lg-4 ">
          <button
            className="btn btn-secondary w-100 mt-2 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#skills"
          >
            Skills
          </button>
          <div className="collapse mt-2" id="skills">
            <div className="card card-body bg-dark border-white text-white">
              <ul>
                <li>
                  Frontend: HTML, CSS, Bootstrap, JavaScript, React.js, Redux
                </li>
                <li>Backend: Node.js, Express.js</li>
                <li>Database: MongoDB</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <button
            className="btn btn-secondary w-100 mt-2 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#projects"
          >
            Projects
          </button>
          <div className="collapse mt-2" id="projects">
            <div className="card card-body border-white bg-dark text-white">
              <ul>
                <li>
                  <b>EasyRide Bus Ticket Booking</b> - MERN stack project with
                  ticket booking & schedule management.
                </li>
                <li>
                  <b>Cake Booking System</b> - CRUD-based project for managing
                  cake orders and customers.
                </li>
                <li>
                  <b>React Vite Portfolio</b> - Dynamic portfolio website using
                  React, Bootstrap, and Framer Motion.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <button
            className="btn btn-secondary w-100 mt-2 text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#education"
          >
            Education
          </button>
          <div className="collapse mt-2" id="education">
            <div className="card card-body border-white bg-dark text-white">
              <ul>
                <li>
                  <b>B.E. Computer Science & Engineering</b> - S.A. Engineering
                  College, Avadi (2023) - 80.4%
                </li>
                <li>
                  <b>Higher Secondary Education</b> - P.A.P.N Government Higher
                  Secondary School (2019) - 57.8%
                </li>
                <li>
                  <b>Secondary School Education</b> - P.A.P.N Government Higher
                  Secondary School (2017) - 79.6%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Card />
      </div>
      <div id="certificate-section">
        <h1 className="text-center mt-4">CERTIFICATION</h1>
      </div>
      <div class="accordion mb-5 ms-3 me-3 mt-3" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button bg-dark text-white text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Course
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="card card-body border-white bg-dark text-white">
                <ul>
                  <li>
                    <b>Mern Stack Course </b> - LiveWire Intitude.
                    <a
                      href="https://drive.google.com/file/d/119jmDeXYlWIi8gYZDndkcBwc3mkWr-Kn/view?usp=sharing"
                      target="blank"
                      className="text-decoration-none text-secondary ms-1"
                    >
                      {" "}
                      Click Here....
                    </a>
                  </li>
                  <li>
                    Completed MERN Stack Developer Certification from Live Wire
                    Institute, enhancing full-stack development skills. Gained
                    expertise in React.js, Node.js, Express.js, and MongoDB for
                    building modern web applications. Worked on real-time
                    projects, focusing on CRUD operations, authentication, and
                    API integrations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Intership
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div className="card card-body border-white bg-dark text-white">
                <ul>
                  <li>
                    <b>React Developer Intership</b> - Handbuiltapps private
                    limied ,Sivakasi.
                    <a
                      href="https://drive.google.com/file/d/1ZSPi6iIMeQvlnqTJtRQ-4tSLb7XTHrwC/view?usp=sharing"
                      target="blank"
                      className="text-decoration-none text-secondary  ms-1 text-hover"
                    >
                      Click Here...
                    </a>
                  </li>
                  <li>
                    Worked as a React Developer Intern at HandbuiltApps, gaining
                    hands-on experience in building scalable web applications.
                    Developed and optimized React components, improving
                    performance and maintainability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
