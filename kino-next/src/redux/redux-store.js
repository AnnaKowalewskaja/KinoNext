import { createStore, combineReducers } from 'redux';

import profileReducer from './profileReducer';
import notesReducer from './notesReducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    notesPage: notesReducer
});


const store = createStore(reducers);


export default store;


