import { combineReducers, createStore, applyMiddleware } from 'redux';
import walletReducer from './reducers/walletReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    walletPage: walletReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;