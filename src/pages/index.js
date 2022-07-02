import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common.scss";
import { Router } from "@reach/router";
import Layout from "../components/Layout/Layout";
import Authroute from "../route/Authroute";
import Homeroute from "../route/Homeroute";

const IndexPage = () => {
  return (
    <Layout>
      <Router>
        <Authroute path="/*" />
        <Homeroute path="/home/*" />
      </Router>
    </Layout>
  );
};

export default IndexPage;
