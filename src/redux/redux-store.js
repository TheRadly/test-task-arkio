import { combineReducers, createStore } from "redux";
import walletReducer from "./reducers/walletReducer";

let reducers = combineReducers({
    walletPage: walletReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;