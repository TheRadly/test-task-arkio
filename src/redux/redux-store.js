import { combineReducers, createStore, applyMiddleware } from 'redux';
import walletReducer from './reducers/walletReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({ walletPage: walletReducer, form: formReducer });
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;