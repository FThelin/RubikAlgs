import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./nav";
import Alg from "./alg";
import AddAlg from "./addAlg";

const App = () => {
  const [algs, setAlgs] = useState([]);
  const [allAlgs, setAllAlgs] = useState([]);

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
      margin: "2rem",
    },
    p: {
      color: "lightgray",
    },
  });
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:8080/api/algs").then((response) =>
      response.json().then((data) => {
        setAlgs(data);
        setAllAlgs(data);
      })
    );
  }, []);

  const showSingleAlg = (name) => {
    name === "ALL"
      ? fetch("http://localhost:8080/api/algs").then((response) =>
          response.json().then((data) => setAlgs(data))
        )
      : allAlgs.find((alg) => {
          if (alg.name === name) {
            fetch(`http://localhost:8080/api/algs/${name}`).then((response) =>
              response.json().then((data) => setAlgs([data]))
            );
          } else {
            setAlgs([]);
          }
        });
  };

  return (
    <div className={classes.main}>
      <h1 className={classes.h1}>Rubik´s Cube PLL algs</h1>
      <p className={classes.p}>
        {`Currently ${allAlgs.length}/21 cases are uploaded`}
      </p>
      <Router>
        <Nav showSingleAlg={showSingleAlg} />

        <div>
          {algs.length !== 0 ? (
            algs.map((alg) => <Alg key={alg.id} alg={alg} />)
          ) : (
            <AddAlg setAlgs={setAlgs} setAllAlgs={setAllAlgs} />
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
