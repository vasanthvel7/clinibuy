import { Router } from "@reach/router";
import React from "react";
import SigninwithEmail from "../components/authentication/signinwithEmail";
import SigninwithMobile from "../components/authentication/signinwithMobile";
import Otpverify from "../components/authentication/otpverify";
import OtpVerified from "../components/authentication/otpVerified";
import Signup from "../components/authentication/signup";

const Authroute = () => {
  return (
    <Router basepath="/">
      <Signup path="/" />
      <SigninwithEmail path="/emailsignin" />
      <SigninwithMobile path="/mobilesignin" />
      <Otpverify path="/otpverify" />
      <OtpVerified path="/otpverified" />
    </Router>
  );
};

export default Authroute;
