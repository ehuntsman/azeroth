import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import animalReducer from './ducks/animals';

export default createStore(animalReducer, applyMiddleware(promiseMiddleware()) );
