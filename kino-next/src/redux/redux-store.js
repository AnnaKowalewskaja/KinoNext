import { createStore, combineReducers } from 'redux';

import profileReducer from './profileReducer';
import notesReducer from './notesReducer';
import finderReducer from './finderReducer';



let reducers = combineReducers({
    profilePage: profileReducer,
    notesPage: notesReducer,
    finderPage: finderReducer,
});


const store = createStore(reducers);


export default store;


window.store = store;