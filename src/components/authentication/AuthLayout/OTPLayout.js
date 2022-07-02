import React from "react";
import { Col, Row } from "react-bootstrap";
import * as classes from "./AuthLayout.module.scss";
import otpImg from "../../../assets/icons/otp_icon.png";

const OTPLayout = ({ children }) => {
  return (
    <div className="mainsec">
      <div className={classes.otpSec}>
        <Row>
          <Col sm={6}>
            <div className={classes.leftSec}>
              <img src={otpImg} alt="signup" />
            </div>
          </Col>
          <Col sm={6}>{children}</Col>
        </Row>
      </div>
    </div>
  );
};

export default OTPLayout;
