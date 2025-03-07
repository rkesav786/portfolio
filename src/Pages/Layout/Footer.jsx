import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Footer = () => {
  const footer_list = [
    {
      link: "github",
      icon: faGithub,
      navigate_link: "https://github.com/rkesav786/",
    },
    {
      link: "linkedin",
      icon: faLinkedin,
      navigate_link: "https://www.linkedin.com/in/kesavan-r-12bb9a221",
    },
    {
      link: "instagram",
      icon: faInstagram,
      navigate_link: "https://www.instagram.com/kesav.mdr/",
    },
  ];

  return (
    <div className="border-top" id="footer-section">
      <div className="bg-dark d-flex justify-content-around text-light p-3">
        <div className="mt-3">
          <h4 className="text-white">Contact</h4>
          <div className="text-secondary mt-3 ">
            <h4 className="fs-6">
              <span className="me-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Kesavan R
            </h4>
            <h4>
              <span className="me-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a
                href="mailto:rkesav786@gmail.com"
                className="text-decoration-none fs-6  text-secondary"
              >
                rkesav786@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="mt-3">
          <h4>Reference</h4>
          <div className="mt-3">
            <ul className="d-flex flex-column gap-3 list-unstyled">
              {footer_list.map((data, index) => (
                <li key={index} className="d-flex align-items-center gap-2">
                  <a href={data.navigate_link} target="blank">
                    <FontAwesomeIcon icon={data.icon} className="text-light" />
                  </a>
                  <span className="text-secondary">{data.link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
