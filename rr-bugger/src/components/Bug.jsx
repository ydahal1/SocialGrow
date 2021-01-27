import React, { useEffect } from "react";
import { bugStore } from "../store/buggerStore";
import { removeBug, resolveBug, editBug, showModal } from "../store/actions";

function Bug(props) {
  //Get the state
  const state = bugStore.getState();
  //functions
  //resolve function
  const handleResolve = id => {
    bugStore.dispatch(resolveBug(id));
  };

  const handleDelte = id => {
    bugStore.dispatch(removeBug(id));
  };

  const handleEdit = id => {
    bugStore.dispatch(editBug(id));
  };

  return (
    <div className="card">
      <p>Bug ID : {props.bug.id}</p>
      <p>Bug Name : {props.bug.name}</p>
      <p>Bug Description : {props.bug.description}</p>
      <p>Resolved : {props.bug.resolved ? "Yes" : "No"}</p>
      <div className="btnActions">
        <button
          className="btn btn-success"
          onClick={() => handleResolve(props.bug.id)}
        >
          Resolve
        </button>
        {/* <button
          className="btn btn-danger"
          onClick={() => handleEdit(props.bug.id)}
        >
          Edit
        </button> */}
        <button
          className="btn btn-danger"
          onClick={() => handleDelte(props.bug.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Bug;
