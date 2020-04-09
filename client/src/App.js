import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Alg from "./alg";

const App = () => {
  const [algs, setAlgs] = useState([]);

  const useStyles = createUseStyles({
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem",
    },
    h1: {
      fontFamily: "'Bebas Neue', cursive",
      color: "#E7E7E7",
      letterSpacing: "0.5rem",
      fontSize: "4rem",
    },
    p: {
      color: "lightgray",
    },
  });
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8080/api/algs").then((response) =>
      response.json().then((data) => setAlgs(data))
    );
  }, []);

  return (
    <div className={classes.main}>
      <h1 className={classes.h1}>Rubik´s Cube PLL algs</h1>
      <p className={classes.p}>
        {`Currently ${algs.length}/21 cases are uploaded`}
      </p>
      <p className={classes.p}>Aa Ab E F Ga Gb Gc Gd</p>
      <div>
        {algs.map((alg) => (
          <Alg key={alg.id} alg={alg} />
        ))}
      </div>
    </div>
  );
};

export default App;
