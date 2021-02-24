import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, IconButton } from "@material-ui/core";

function LoginP() {
  const [email, setEmail] = useState(null);
  const [emailR, setEmailR] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginForm, setLoginForm] = useState(false);

  // Login fct
  const loginFct = () => {
    setEmail(null);
    setPassword(null);
  };
  // Reset Fct
  const ResetFct = () => {
    setEmailR(null);
  };

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  const classes = useStyles();
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      {loginForm ? (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
            label="Email"
            type="email"
            autoFocus
            placeholder="firstname.lastname@esi.ac.ma"
            helperText="your ESI email"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            security
            onChange={(v) => setPassword(v.target.value)}
            placeholder="Enter your password"
            helperText="in case is your first time, you need to make a new password for your account by clicking Reset Password"
          />
          <Button
            disabled={!email || !password}
            variant="outlined"
            color="primary"
            onClick={loginFct}>
            Login
          </Button>
          <p style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            forget password?{" "}
            <strong
              onClick={() => setLoginForm(false)}
              style={{ color: "blue", cursor: "pointer" }}>
              Reset Password
            </strong>
          </p>
        </form>
      ) : (
        <form className={classes.root}>
          <TextField
            id="email_r"
            value={emailR}
            onChange={(v) => setEmailR(v.target.value)}
            label="Email"
            type="email"
            autoFocus
            placeholder="firstname.lastname@esi.ac.ma"
            helperText="your ESI email"
          />
          <Button
            disabled={!emailR}
            variant="outlined"
            color="primary"
            onClick={ResetFct}>
            Reset Password
          </Button>
          <IconButton
            style={{ width: "fit-content" }}
            onClick={() => setLoginForm(true)}>
            <ArrowBackIcon />
          </IconButton>
        </form>
      )}

      <div className="right_side_container">
        <div className="image_"></div>
      </div>
    </div>
  );
}

export default LoginP;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    flexDirection: "column",
    display: "flex",
    top: "40%",
    left: "35%",
    transform: "translate(-50%,-50%)",
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));
