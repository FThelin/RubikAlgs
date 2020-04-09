import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const useStyles = createUseStyles({
    ul: {
      marginTop: "3rem",
      listStyleType: "none",
      display: "flex",
      width: "40rem",
      justifyContent: "space-between",
      fontSize: "1.2rem",
    },
    link: {
      color: "#E7E7E7",
      textDecoration: "none",
    },
  });
  const classes = useStyles();

  const findAlg = (e) => {
    props.showSingleAlg(e.target.innerText);
  };

  return (
    <ul className={classes.ul}>
      <Link className={classes.link} to="/All">
        <li onClick={findAlg}>ALL</li>
      </Link>
      <Link className={classes.link} to="/Aa">
        <li onClick={findAlg}>Aa</li>
      </Link>
      <Link className={classes.link} to="/Ab">
        <li onClick={findAlg}>Ab</li>
      </Link>
      <Link className={classes.link} to="/E">
        <li onClick={findAlg}>E</li>
      </Link>
      <Link className={classes.link} to="/F">
        <li onClick={findAlg}>F</li>
      </Link>
      <Link className={classes.link} to="/Ga">
        <li onClick={findAlg}>Ga</li>
      </Link>
      <Link className={classes.link} to="/Gb">
        <li onClick={findAlg}>Gb</li>
      </Link>
      <Link className={classes.link} to="/Gc">
        <li onClick={findAlg}>Gc</li>
      </Link>
      <Link className={classes.link} to="/Gd">
        <li onClick={findAlg}>Gd</li>
      </Link>
      <Link className={classes.link} to="/H">
        <li onClick={findAlg}>H</li>
      </Link>
      <Link className={classes.link} to="/Ja">
        <li onClick={findAlg}>Ja</li>
      </Link>
      <Link className={classes.link} to="/Jb">
        <li onClick={findAlg}>Jb</li>
      </Link>
      <Link className={classes.link} to="/Na">
        <li onClick={findAlg}>Na</li>
      </Link>
      <Link className={classes.link} to="/Nb">
        <li onClick={findAlg}>Nb</li>
      </Link>
      <Link className={classes.link} to="/Ra">
        <li onClick={findAlg}>Ra</li>
      </Link>
      <Link className={classes.link} to="/Rb">
        <li onClick={findAlg}>Rb</li>
      </Link>
      <Link className={classes.link} to="/T">
        <li onClick={findAlg}>T</li>
      </Link>
      <Link className={classes.link} to="/Ua">
        <li onClick={findAlg}>Ua</li>
      </Link>
      <Link className={classes.link} to="/Ub">
        <li onClick={findAlg}>Ub</li>
      </Link>
      <Link className={classes.link} to="/V">
        <li onClick={findAlg}>V</li>
      </Link>
      <Link className={classes.link} to="/Y">
        <li onClick={findAlg}>Y</li>
      </Link>
      <Link className={classes.link} to="/Z">
        <li onClick={findAlg}>Z</li>
      </Link>
    </ul>
  );
};

export default Nav;
