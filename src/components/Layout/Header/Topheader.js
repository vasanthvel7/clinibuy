import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "../../../services/utility";
import * as classes from "./Header.module.scss";

const Topheader = () => {
  return (
    <div className={classes.headerSec}>
      <div className="mainsec">
        <Row>
          <Col sm={10}>
            <div className={classes.leftSec}>
              <Link to="/home">HOME</Link>
              <Link>ABOUT US</Link>
              <Link>SHOP</Link>
              <Link>CONTACT US</Link>
            </div>
          </Col>
          <Col sm={2}>
            <div className={classes.RightSec}>
              <Link>Order history</Link>
              <span className={classes.divider}></span>
              <Link to="/emailsignin">login</Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Topheader;
