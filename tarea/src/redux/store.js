import rootReducers from "./reducers/index";
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";


const store = createStore(rootReducers, applyMiddleware(reduxThunk));

export default store;