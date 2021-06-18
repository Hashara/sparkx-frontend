import {combineReducers} from "redux";
import homeReducer from "../views/home/redux/reducer/homeReducer";
import districtReducer from "../views/home/redux/reducer/districtReducer";
import hospitalReducer from "../views/home/redux/reducer/hospitalReducer";
import AuthReducer from "../views/Auth/redux/reducer/AuthReducer";

const rootReducer = combineReducers({
    home: homeReducer,
    districts: districtReducer,
    hospitals: hospitalReducer,
    auth: AuthReducer,
});

export default rootReducer;