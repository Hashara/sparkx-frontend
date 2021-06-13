import {combineReducers} from "redux";
import homeReducer from "../views/home/redux/reducer/homeReducer";

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;