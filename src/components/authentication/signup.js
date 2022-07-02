import { IconButton, Input, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import * as classes from "./signup.module.scss";
import { Link } from "../../services/utility";
import { navigate } from "gatsby";
import AuthLayout from "./AuthLayout/AuthLayout";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showrepeatPassword, setshowrepeatPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowrepeatPassword = () =>
    setshowrepeatPassword(!showrepeatPassword);
  return (
    <AuthLayout>
      <div className={classes.signupContainer}>
        <h2>Sign up your Account</h2>
        <div className={classes.inputContainer}>
          <p className="lableTxt">Name</p>
          <Input className={classes.signupInput} />
        </div>

        <div className={classes.inputContainer}>
          <p className="lableTxt">Email Address </p>
          <Input className={classes.signupInput} />
        </div>
        <div className={classes.inputContainer}>
          <p className="lableTxt">Phone number</p>
          <Input className={classes.signupInput} />
        </div>
        <div className={classes.inputContainer}>
          <p className="lableTxt">Address</p>
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
        <div className={classes.inputContainer}>
          <p className="lableTxt">Repeat Password</p>
          <Input
            type={showrepeatPassword ? "text" : "password"}
            className={classes.signupInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowrepeatPassword}
                >
                  {showrepeatPassword ? (
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

        <div className={classes.btnSec}>
          <button
            onClick={() => {
              navigate("/otpverify");
            }}
          >
            <p>Sign up to Your Account</p>
          </button>
          <p>
            Already Have an Account ? <Link to="/emailsignin">Sign in</Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
