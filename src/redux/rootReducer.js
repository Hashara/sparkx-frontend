import {combineReducers} from "redux";
import homeReducer from "../views/home/redux/reducer/homeReducer";
import districtReducer from "../views/home/redux/reducer/districtReducer";
import hospitalReducer from "../views/home/redux/reducer/hospitalReducer";
import AuthReducer from "../views/Auth/redux/reducer/AuthReducer";
import roleTypeReducer from "../views/Auth/redux/reducer/RoleReducer";
import queueReducer from "../views/dashboard/redux/reducer/queueReducer";

const rootReducer = combineReducers({
    home: homeReducer,
    districts: districtReducer,
    hospitals: hospitalReducer,
    auth: AuthReducer,
    roleTypes: roleTypeReducer,
    queue: queueReducer,
});

export default rootReducer;