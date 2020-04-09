import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";

const AddAlg = (props) => {
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();
  const pllCase = history.location.pathname.slice(1);
  let recommended;
  let alternative;

  const useStyles = createUseStyles({
    input: {
      width: "30rem",
      height: "2rem",
      fontSize: "1.2rem",
      color: "black",
      marginBottom: "0.5rem",
    },
    button: {
      height: "2rem",
      backgroundColor: "#e0231f",
      color: "black",
      border: "none",
      width: "30rem",
      marginTop: "1rem",
      fontSize: "1.2rem",
    },
  });
  const classes = useStyles();

  const imageUrl = () => {
    switch (pllCase) {
      case "Aa":
        return "https://www.speedsolving.com/wiki/images/0/08/A1.gif";
      case "Ab":
        return "https://www.speedsolving.com/wiki/images/b/b2/A.gif";
      case "E":
        return "https://www.speedsolving.com/wiki/images/7/7b/E.gif";
      case "F":
        return "https://www.speedsolving.com/wiki/images/f/fd/F.gif";
      case "Ga":
        return "https://www.speedsolving.com/wiki/images/2/2f/G3.gif";
      case "Gb":
        return "https://www.speedsolving.com/wiki/images/4/4d/G2.gif";
      case "Gc":
        return "https://www.speedsolving.com/wiki/images/a/a6/G1.gif";
      case "Gd":
        return "https://www.speedsolving.com/wiki/images/7/75/G.gif";
      case "H":
        return "https://www.speedsolving.com/wiki/images/7/72/H-perm.PNG";
      case "Ja":
        return "https://www.speedsolving.com/wiki/images/f/fb/J1.gif";
      case "Jb":
        return "https://www.speedsolving.com/wiki/images/1/17/J.gif";
      case "Na":
        return "https://www.speedsolving.com/wiki/images/5/59/N1.gif";
      case "Nb":
        return "https://www.speedsolving.com/wiki/images/f/fa/N.gif";
      case "Ra":
        return "https://www.speedsolving.com/wiki/images/8/85/R1.gif";
      case "Rb":
        return "https://www.speedsolving.com/wiki/images/3/38/R.gif";
      case "Ua":
        return "https://www.speedsolving.com/wiki/images/6/6b/U1.gif";
      case "Ub":
        return "https://www.speedsolving.com/wiki/images/4/47/U.gif";
      case "T":
        return "https://www.speedsolving.com/wiki/images/4/49/T.gif";
      case "V":
        return "https://www.speedsolving.com/wiki/images/9/90/V.gif";
      case "Y":
        return "https://www.speedsolving.com/wiki/images/b/b9/Y.gif";
      case "Z":
        return "https://www.speedsolving.com/wiki/images/2/2c/Z.gif";
      default:
        return "hej hej";
    }
  };

  const setRecommended = (e) => {
    recommended = e.target.value;
  };
  const setAlternative = (e) => {
    alternative = e.target.value;
  };

  const uploadCase = (e) => {
    e.preventDefault();
    let data = {
      name: pllCase,
      imageUrl: imageUrl(),
      recommended: recommended,
      alternative: alternative,
    };
    postData(data).then((data) => {
      props.setAllAlgs([...data]);
      props.setAlgs([...data]);
    });
  };

  async function postData(data) {
    const response = await fetch("http://localhost:8080/api/algs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  const renderForm = () => {
    return (
      <form style={{ display: "flex", flexDirection: "column" }}>
        <h4>Name:</h4>
        <input
          className={classes.input}
          type="text"
          value={history.location.pathname.slice(1)}
          disabled
        />
        <h4>Image URL:</h4>
        <input
          className={classes.input}
          type="text"
          value={imageUrl()}
          disabled
        />
        <h4>Recommended alg:</h4>
        <input
          required
          className={classes.input}
          type="text"
          onChange={setRecommended}
        />
        <h4>Alternative alg:</h4>
        <input
          required
          className={classes.input}
          type="text"
          onChange={setAlternative}
        />
        <button className={classes.button} onClick={uploadCase}>
          Upload case
        </button>
      </form>
    );
  };

  const show = (e) => {
    setShowForm(!showForm);
    e.target.remove();
  };

  return (
    <div
      style={{
        height: "40rem",
        marginTop: "3rem",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "1rem" }}>This alg is not uploaded yet</h3>
      <button className={classes.button} onClick={show}>
        Add this case
      </button>
      {showForm && renderForm()}
    </div>
  );
};

export default AddAlg;
