import React from "react";
import { Row } from "react-bootstrap";
import ProductView from "../mainComponents/ProductView";
import * as classes from "./Home.module.scss";

const Home = () => {
  var array = new Array(6).fill("product");
  return (
    <div className="mainsec">
      <div className={classes.productSec}>
        <h1>New Arrival</h1>
        <Row>
          {array.map((item, index) => (
            <ProductView id={index} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
