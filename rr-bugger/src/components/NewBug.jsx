import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { bugStore } from "../store/buggerStore";
import { showModal, addBug, editBug, saveEditedBug } from "../store/actions";

function NewBug() {
  const store = bugStore.getState();
  let [bugName, setBugName] = useState("");
  let [bugDescription, setBugDescription] = useState("");

  //functions
  const closeModel = () => {
    bugStore.dispatch(showModal());
    bugStore.dispatch(editBug(null));
  };

  const handleBugNameChange = e => {
    setBugName(e.target.value);
  };

  const handlebugDescriptionChange = e => {
    setBugDescription(e.target.value);
  };

  //combine state and handle submit
  let payload = { bugName: bugName, bugDescription: bugDescription };
  const handleFormSubmit = e => {
    e.preventDefault();
    bugStore.dispatch(addBug(payload));
    setBugName("");
    setBugDescription("");
    bugStore.dispatch(showModal());
    bugStore.dispatch(editBug(null));
  };

  //handling edit
  useEffect(() => {
    if (store.editBug) {
      const itemtoBeEdited = store.bugs.filter(bug => bug.id === store.editBug);
      setBugName(itemtoBeEdited[0].name);
      setBugDescription(itemtoBeEdited[0].description);
      bugStore.dispatch(showModal());
    }
  }, [store.editBug]);

  //save edit
  const saveEdit = e => {
    e.preventDefault();
    bugStore.dispatch(
      saveEditedBug(
        (payload = {
          id: store.editBug,
          name: bugName,
          description: bugDescription
        })
      )
    );

    setBugName("");
    setBugDescription("");
    bugStore.dispatch(showModal());
    bugStore.dispatch(editBug(null));
  };

  return (
    <div>
      <Modal
        isOpen={store.displayInput}
        className="inputModal col-md-5 "
        ariaHideApp={false}
      >
        <form
          className="form"
          onSubmit={store.editBug ? saveEdit : handleFormSubmit}
        >
          <div className="form-group">
            <label htmlFor="bugName">Bug Name:</label>
            <input
              type="text"
              className="form-control"
              value={bugName}
              onChange={handleBugNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bugName">Description:</label>
            <textarea
              cols="3"
              rows="4"
              className="form-control"
              value={bugDescription}
              onChange={handlebugDescriptionChange}
              required
            />
          </div>
          <button className="modalBtn">{store.editBug ? "Save" : "Add"}</button>
          <button onClick={closeModel} className="modalBtn modalClose">
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default NewBug;
