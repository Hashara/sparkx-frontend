import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistState = loadState();

const store = createStore(rootReducer,persistState,composeWithDevTools(applyMiddleware(logger, thunk)));

store.subscribe(throttle(()=> {
    saveState({
        auth: store.getState().auth
        // store.getState()
    })
},1000))

export default store;