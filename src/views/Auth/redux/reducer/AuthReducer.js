import produce from "immer";
import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    PATIENT_REGISTER_REQUEST,
    PATIENT_REGISTER_SUCCESS,
    PATIENT_REGISTER_ERROR,
    PERSON_REGISTER_REQUEST,
    PERSON_REGISTER_SUCCESS,
    PERSON_REGISTER_ERROR
} from "../actions/AuthActionTypes";

const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
    currentUser: 'initial',
    newUser: false,
};

export default function AuthReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case LOGIN_USER_REQUEST:
                draft.loading = true;
                draft.newUser = false;
                break;
            case LOGIN_USER_SUCCESS:
                draft.loading = false;
                draft.loggedIn = true;
                draft.currentUser = action.payload;
                draft.error = null;
                draft.newUser = false;
                break;
            case LOGIN_USER_ERROR:
                draft.loading = false;
                draft.loggedIn = false;
                draft.error = action.payload;
                draft.currentUser = null;
                draft.newUser = false;
                break;
            case PATIENT_REGISTER_REQUEST:
                draft.loading = true;
                draft.newUser = true;
                break;
            case PATIENT_REGISTER_SUCCESS:
                draft.loading = false;
                draft.loggedIn = true;
                draft.currentUser = action.payload;
                draft.error = null;
                draft.newUser = true;
                break;
            case PATIENT_REGISTER_ERROR:
                draft.loading = false;
                draft.loggedIn = false;
                draft.error = action.payload;
                draft.currentUser = null;
                draft.newUser = true;
                break;
            default:
                break;
        }
    });
}