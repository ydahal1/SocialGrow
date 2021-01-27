import { createStore, Middleware, applyMiddleware } from "redux";
import bugReducer from "../reducer";
import thunk from "redux-thunk";

export const bugStore = createStore(
  bugReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
