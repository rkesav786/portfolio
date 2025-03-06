import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Header } from "./Pages/Layout/Header";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Pages/Layout/Footer";
import "./App.css"

export const App = () => {
  return (
    <>
      <div className="container ">
        <Header />
        <div className="mt-3">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
};
