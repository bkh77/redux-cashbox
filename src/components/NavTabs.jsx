import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textDecoration: "none",
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/cashbox">
        <Button variant="contained">Kassa</Button>
      </Link>
      <Link to="/users">
        <Button variant="contained">Foydalanuvchilar</Button>
      </Link>
      <Link to="/income">
        <Button variant="contained" color="primary">
          Kirim
        </Button>
      </Link>
      <Link to="/expence">
        <Button variant="contained" color="secondary">
          Chiqim
        </Button>
      </Link>
      <Link to="/reports">
        <Button variant="contained" color="primary">
          Reports
        </Button>
      </Link>
    </div>
  );
}
