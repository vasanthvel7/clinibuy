import React from "react";
import { Col, Row } from "react-bootstrap";
import * as classes from "./AuthLayout.module.scss";
import signupImg from "../../../assets/images/signup_img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="mainsec">
      <div className={classes.signupSec}>
        <Row>
          <Col sm={6}>{children}</Col>
          <Col sm={6}>
            <div className={classes.rightSec}>
              <img src={signupImg} alt="signup" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuthLayout;
