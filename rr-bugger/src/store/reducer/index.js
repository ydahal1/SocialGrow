import produce from "immer";
let initialState = {
  bugs: [
    {
      id: 1,
      name: "404 error",
      description: "Getting 404 error on contact page",
      resolved: false
    },
    {
      id: 2,
      name: "not rendering components",
      description: "Index page components missing",
      resolved: false
    },
    {
      id: 3,
      name: "location",
      description: "Pulling wrong Geocode",
      resolved: false
    }
  ],
  displayInput: false,
  editBug: null
};

export default function bugReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "ADD_BUG":
      let lastId = state.bugs[state.bugs.length - 1].id;
      let newbug = {
        id: ++lastId,
        name: action.payload.bugName,
        description: action.payload.bugDescription,
        resolved: false
      };
      return produce(state, draftState => {
        draftState.bugs.push(newbug);
      });

    case "REMOVE_BUG":
      let smallerBugList = state.bugs.filter(
        bug => bug.id !== action.payload.id
      );
      return { ...state, bugs: smallerBugList };
    case "RESOLVE_BUG":
      let editedBugs = state.bugs.map(bug =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
      return { ...state, bugs: editedBugs };
    case "SHOW_HIDE_MODAL":
      let displayInput = !state.displayInput;
      return { ...state, displayInput };
    case "EDIT_BUG":
      return { ...state, editBug: action.payload.id };
    case "SAVE_EDITED_BUG":
      return console.log("save the edited one");
    default:
      return state;
  }
}
