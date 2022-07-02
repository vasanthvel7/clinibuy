import { IconButton, Input, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import * as classes from "./signup.module.scss";
import { Link } from "../../services/utility";
import AuthLayout from "./AuthLayout/AuthLayout";

const SigninwithMobile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <AuthLayout>
      <div className={classes.signupContainer}>
        <h2>login to your Account</h2>
        <div className={classes.inputContainer}>
          <p className="lableTxt">Phone number</p>
          <Input className={classes.signupInput} />
        </div>
        <div className={classes.inputContainer}>
          <p className="lableTxt">Password</p>
          <Input
            type={showPassword ? "text" : "password"}
            className={classes.signupInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <span class="material-symbols-outlined">visibility</span>
                  ) : (
                    <span class="material-symbols-outlined">
                      visibility_off
                    </span>
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div className={classes.linkSec}>
          <Link to="/emailsignin">Login with Email address</Link>
          <p className={classes.forgotTxt}>Forgot Password</p>
        </div>
        <div className={classes.btnSec}>
          <button>
            <p>Login to Your Account</p>
          </button>
          <p>
            Don’t Have an Account ? <Link to="/">Sign up</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SigninwithMobile;
