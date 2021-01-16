// Sets store (global) state

import { combineReducers } from 'redux';

import { studentsReducer } from './studentsReducer.js';
import { wordsReducer } from './wordsReducer.js';



export const rootReducer = combineReducers({
    // key sent to store can be named anything ex. students, pupils
    // value calls specific reducer to update state
    students: studentsReducer,
    words: wordsReducer
})