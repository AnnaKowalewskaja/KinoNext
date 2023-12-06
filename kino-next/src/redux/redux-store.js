import { combineReducers, applyMiddleware } from "redux";

import profileReducer from "./profileReducer";
import notesReducer from "./notesReducer";
import finderReducer from "./finderReducer";
import authReducer from "./authReducer";

let reducer = combineReducers({
  profilePage: profileReducer,
  notesPage: notesReducer,
  finderPage: finderReducer,
  auth: authReducer,
});
const configureStore = require("@reduxjs/toolkit").configureStore;
const store = configureStore({ reducer, applyMiddleware });

export default store;

window.store = store;
