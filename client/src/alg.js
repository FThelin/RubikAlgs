import React from "react";
import { createUseStyles } from "react-jss";

const Alg = (props) => {
  const useStyles = createUseStyles({
    box: {
      display: "flex",
      marginBottom: "2rem",
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
        <h2>{props.alg.name}</h2>
        <p>
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
