import React, { useState } from "react";
import { useHistoy, useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";

const UpdateAlg = (props) => {
  const [recommended, setRecommended] = useState("");
  const [alternative, setAlternative] = useState("");
  let history = useHistory();

  const useStyles = createUseStyles({
    box: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
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
    input: {
      width: "30rem",
      height: "2rem",
      fontSize: "1.2rem",
      color: "black",
      marginBottom: "0.5rem",
    },
  });
  const classes = useStyles();

  const updateRecommended = (e) => {
    setRecommended(e.target.value);
  };
  const updateAlternative = (e) => {
    setAlternative(e.target.value);
  };

  const updateCase = (e) => {
    e.preventDefault();
    let data = {
      recommended: recommended,
      alternative: alternative,
    };
    updateData(data).then((data) => {
      props.setAllAlgs(data);
      props.setAlgs(data);
      props.close();
      history.push("/");
    });
  };

  async function updateData(data) {
    const response = await fetch(
      `http://localhost:8080/api/algs/${props.name}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  }

  return (
    <div className={classes.box}>
      <p>Update Case {props.name}</p>
      <input
        className={classes.input}
        type="text"
        onChange={updateRecommended}
        placeholder="Recommended alg...."
      />
      <input
        className={classes.input}
        type="text"
        onChange={updateAlternative}
        placeholder="Alternative alg...."
      />
      <button className={classes.btn} onClick={updateCase}>
        Update
      </button>
      <button className={classes.btn} onClick={props.close}>
        Close
      </button>
    </div>
  );
};

export default UpdateAlg;
