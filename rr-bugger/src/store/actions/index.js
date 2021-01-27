//Action types
//add a bug
export const addBug = payload => {
  return {
    type: "ADD_BUG",
    payload: payload
  };
};

//remove a bug
export const removeBug = id => {
  return {
    type: "REMOVE_BUG",
    payload: {
      id
    }
  };
};

//resolve a bug
export const resolveBug = id => {
  return {
    type: "RESOLVE_BUG",
    payload: {
      id
    }
  };
};

//edit a bug
export const editBug = id => {
  return { type: "EDIT_BUG", payload: { id } };
};

//save edited bug
export const saveEditedBug = payload => {
  return {
    type: "SAVE_EDITED_BUG",
    payload: payload
  };
};

//Show hide input modal
export const showModal = () => {
  return {
    type: "SHOW_HIDE_MODAL"
  };
};
