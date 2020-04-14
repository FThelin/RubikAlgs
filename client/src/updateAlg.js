import React, { useState } from "react";
import { useHistoy, useHistory } from "react-router-dom";

const UpdateAlg = (props) => {
  const [recommended, setRecommended] = useState("");
  const [alternative, setAlternative] = useState("");
  let history = useHistory();

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
    <div>
      <p>Update Case {props.name}</p>
      <input type="text" onChange={updateRecommended} />
      <input type="text" onChange={updateAlternative} />
      <button onClick={updateCase}>Update</button>
      <button onClick={props.close}>Close</button>
    </div>
  );
};

export default UpdateAlg;
