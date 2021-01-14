import { combineReducers } from 'redux';

import { studentsReducer } from './studentsReducer.js';



export const rootReducer = combineReducers({
    students: studentsReducer
})