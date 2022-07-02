import { Router } from "@reach/router";
import React from "react";
import Home from "../components/home/Home";

const Homeroute = () => {
  return (
    <Router basepath="/home">
      <Home path="/" />
    </Router>
  );
};

export default Homeroute;
