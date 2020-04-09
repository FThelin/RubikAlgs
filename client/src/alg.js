import React from "react";
import { createUseStyles } from "react-jss";

const Alg = (props) => {
  const useStyles = createUseStyles({
    box: {
      width: "40rem",
      display: "flex",
      marginTop: "2rem",
      backgroundColor: "rgba(0,0,0,0.2)",
    },
    innerBox: {
      marginLeft: "1rem",
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.box}>
      <img src={props.alg.imageUrl} alt="algimage" />
      <div className={classes.innerBox}>
        <h2 style={{ marginTop: "1rem" }}>{props.alg.name}</h2>
        <p style={{ marginTop: "1rem" }}>
          <span style={{ fontWeight: "bold" }}>Recommended: </span>
          {props.alg.recommended}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Alternative: </span>
          {props.alg.alternative}
        </p>
      </div>
    </div>
  );
};

export default Alg;
