import React from "react";
import pickbazar from "../assets/pickbazar.png";
import ecommerce from "../assets/ecommerce.png";
import { motion } from "framer-motion";

// Access Framer Motion from the global scope
// const { motion } = window.framerMotion;

export const Card = () => {
  const sampleproject = [
    {
      image: pickbazar,
      title: "PickBazar",
      details:
        "PickBazar is a modern, fully responsive e-commerce platform built with React.js. It offers a seamless shopping experience with features like product filtering, cart management, and secure checkout.",
      source: "HTML, CSS, JavaScript, React.js, Mock Api",
      github_link: "https://github.com/rkesav786/pickbazar-Frontend",
    },
    {
      image: pickbazar,
      title: "EasyBus Ride",
      details:
        "Sample Bus booking website,built with React.js. It offers a seamless admin add bus with features like.create, delete, update, add bus",
      source: "HTML, CSS, JavaScript, React.js, Express js, MongoDB",
      github_link: "https://github.com/rkesav786/EasyRideProject/tree/bus",
    },
    {
      image: ecommerce,
      title: "E-Commerce Store",
      details:
        "This e-commerce store is a dynamic web application designed for online shopping. It includes user authentication, product listings, and a responsive design built with Bootstrap and React.js.",
      source: "HTML, CSS, Bootstrap, JavaScript, React.js",
      github_link: "https://github.com/rkesav786/E-Commerce-Frontend",
    },
  ];

  return (
    <div className="row">
      {sampleproject.map((data, index) => (
        <motion.div
          className="card col-lg-6 mx-auto m-3 text-white"
          key={index}
          style={{ width: "18rem", background: "#181C14" }}
          drag
          dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
          whileDrag={{ scale: 1.2 }}
          // transition={{ duration: 0.2, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={data.image}
            className="card-img-top mt-2"
            alt={data.title}
          />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.details}</p>
          </div>
          <ul className="list-group list-group-flush rounded">
            <li className="list-group-item">{data.source}</li>
          </ul>
          <div className="card-body">
            <button className="btn">
              <a
                href={data.github_link}
                className="card-link text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
