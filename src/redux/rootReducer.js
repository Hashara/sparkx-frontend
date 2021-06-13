import {combineReducers} from "redux";
import homeReducer from "../views/home/redux/reducer/homeReducer";
import districtReducer from "../views/home/redux/reducer/districtReducer";

const rootReducer = combineReducers({
    home: homeReducer,
    districts: districtReducer
});

export default rootReducer;