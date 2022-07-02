import React from "react";
import * as classes from "./signup.module.scss";
import OTPLayout from "./AuthLayout/OTPLayout";
import successImg from "../../assets/icons/otp_success.png";

const OtpVerified = () => {
  return (
    <OTPLayout>
      <div className={classes.successSec}>
        <img src={successImg} alt="Verify" />
        <h3>Verification Success</h3>
        <p>Congratultions! you have been successfully verified</p>
      </div>
    </OTPLayout>
  );
};

export default OtpVerified;
