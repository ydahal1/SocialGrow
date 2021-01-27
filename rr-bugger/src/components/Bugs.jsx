import React from "react";
import { bugStore } from "../store/buggerStore";
import Bug from "./Bug";
import NewBug from "./NewBug";

function Bugs() {
  const bugs = bugStore.getState();

  return (
    <div className="bugsContainer">
      <NewBug />
      {bugs.bugs.length > 0
        ? bugs.bugs.map(bug => <Bug bug={bug} key={bug.id} />)
        : null}
    </div>
  );
}

export default Bugs;
