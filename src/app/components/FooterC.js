import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://jinaesischool.web.app/">
        Jina ESI School
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));
function FooterC() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography color="#1a1a1a" variant="h6" align="center" gutterBottom>
        Created By:
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p">
        Ahmed BARGADY
      </Typography>
      <Copyright />
    </footer>
  );
}

export default FooterC;
