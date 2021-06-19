import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS
} from "./AuthActionTypes";
import axios from "axios";
import {POST_LOGIN_USER} from "../../../../endPoints";

export function loginUser(email, password) {
    return {
        type: LOGIN_USER_REQUEST,
        email,
        password
    }
}

export function loginUserSuccess(currentUser) {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {currentUser}
    }
}

export function loginUserError(message) {
    return {
        type: LOGIN_USER_ERROR,
        payload: {message}
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginUser(email, password))
        axios.post(POST_LOGIN_USER, {
                email: email,
                password: password
            },
        )
            .then(res => {
                const currentUser = res.data;
                dispatch(loginUserSuccess(currentUser));
            })
            .catch(error => {
                const errorMsg = error.response.data.message;
                dispatch(loginUserError(errorMsg))
            })
    }
}