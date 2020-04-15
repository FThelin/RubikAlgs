import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import UpdateAlg from "./updateAlg";
import { useHistory } from "react-router-dom";

const Alg = (props) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

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
    btn: {
      margin: "0.3rem 1rem 0 0",
      width: "4rem",
      height: "2rem",
      backgroundColor: "transparent",
      border: "2px solid lightgray",
      borderRadius: "5px",
      color: "lightgray",
      fontSize: "1rem",
      fontFamily: "'Rubik', sans-serif",
      "&:hover": {
        cursor: "pointer",
        border: "2px solid white",
        color: "white",
      },
    },
  });
  const classes = useStyles();

  const showUpdateFields = () => {
    setShow(true);
  };

  const closeUpdateFields = () => {
    setShow(false);
  };

  async function deleteCase() {
    const response = await fetch(
      `http://localhost:8080/api/algs/${props.alg.name}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    props.setAllAlgs(data);
    props.setAlgs(data);
    history.push("/");
  }

  return show ? (
    <UpdateAlg
      name={props.alg.name}
      close={closeUpdateFields}
      setAlgs={props.setAlgs}
      setAllAlgs={props.setAllAlgs}
    />
  ) : (
    <div>
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
      <div>
        <button className={classes.btn} onClick={showUpdateFields}>
          Update
        </button>
        <button className={classes.btn} onClick={deleteCase}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Alg;
