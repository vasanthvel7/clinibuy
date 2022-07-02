import React, { useState } from "react";
import * as classes from "./signup.module.scss";
import OtpInput from "react-otp-input";
import { Link } from "../../services/utility";
import OTPLayout from "./AuthLayout/OTPLayout";
import { navigate } from "gatsby";

const Otpverify = () => {
  const [otpvalue, setotpvalue] = useState();
  return (
    <OTPLayout>
      <div className={`${classes.signupContainer} ${classes.otpContainer}`}>
        <h2>OTP Verification</h2>
        <p className={classes.descTxt}>
          We have send code verification to your mobile number (or) your email
          address
        </p>
        <OtpInput
          value={otpvalue}
          onChange={(value) => {
            setotpvalue(value);
          }}
          numInputs={4}
          containerStyle={classes.otpContainer}
          inputStyle={classes.inputSec}
          separator={<div className={classes.seperator} />}
        />

        <div className={`${classes.btnSec} ${classes.otpBtn}`}>
          <p className={classes.resendSec}>Don’t Receive the OTP?</p>
          <Link>Resend Code</Link>

          <button
            onClick={() => {
              navigate("/otpverified");
            }}
          >
            <p>Verify & Proceed</p>
          </button>
        </div>
      </div>
    </OTPLayout>
  );
};

export default Otpverify;
