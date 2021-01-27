import React from "react";
import { bugStore } from "../store/buggerStore";
import { showModal } from "../store/actions";

function NavBar() {
  const bugs = bugStore.getState().bugs;

  //Add bug function
  const addNewBug = () => {
    bugStore.dispatch(showModal());
  };
  return (
    <div className="navigationBar">
      <p>Total Bugs : {bugs.length} </p>
      <button onClick={addNewBug}>Add New</button>
    </div>
  );
}

export default NavBar;
