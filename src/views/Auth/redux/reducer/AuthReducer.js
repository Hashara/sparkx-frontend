import produce from "immer";
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS
} from "../actions/AuthActionTypes";

const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
    currentUser: 'initial',
};

export default function AuthReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case LOGIN_USER_REQUEST:
                draft.loading = true;
                break;
            case LOGIN_USER_SUCCESS:
                draft.loading = false;
                draft.loggedIn = true;
                draft.currentUser = action.payload;
                break;
            case LOGIN_USER_ERROR:
                draft.loading = false;
                draft.loggedIn = false;
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}