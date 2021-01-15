// Sets store (global) state

import { combineReducers } from 'redux';

import { studentsReducer } from './studentsReducer.js';



export const rootReducer = combineReducers({
    // key sent to store can be named anything ex. students, pupils
    // value calls specific reducer to update state
    students: studentsReducer
})