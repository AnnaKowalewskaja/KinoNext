import { createStore, combineReducers } from "redux";

import profileReducer from "./profileReducer";
import notesReducer from "./notesReducer";
import finderReducer from "./finderReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  notesPage: notesReducer,
  finderPage: finderReducer,
  auth: authReducer,
});

const store = createStore(reducers);

export default store;

window.store = store;
