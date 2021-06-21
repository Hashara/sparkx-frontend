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
} from "./AuthActionTypes";
import axios from "axios";
import {POST_LOGIN_USER, POST_REGISTER_PATIENT, POST_REGISTER_PERSON} from "../../../../endPoints";

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


export function patientRegisterRequest(values) {
    return {
        type: PATIENT_REGISTER_REQUEST,
        values
    }
}

export function patientRegisterSuccess(currentUser) {
    return {
        type: PATIENT_REGISTER_SUCCESS,
        payload: {currentUser}
    }
}

export function patientRegisterError(message) {
    return {
        type: PATIENT_REGISTER_ERROR,
        payload: {message}
    }
}

export const patientRegister = (values) => {
    return (dispatch) => {
        dispatch(patientRegisterRequest(values))
        axios.post(POST_REGISTER_PATIENT, values
        )
            .then(res => {
                const currentUser = res.data;
                dispatch(patientRegisterSuccess(currentUser));
            })
            .catch(error => {
                const errorMsg = error.response.data.message;
                dispatch(patientRegisterError(errorMsg))
            })
    }
}

export function personRegisterRequest(values) {
    return {
        type: PERSON_REGISTER_REQUEST,
        values
    }
}

export function personRegisterSuccess(currentUser) {
    return {
        type: PERSON_REGISTER_SUCCESS,
        payload: {currentUser}
    }
}

export function personRegisterError(message) {
    return {
        type: PERSON_REGISTER_ERROR,
        payload: {message}
    }
}

export const personRegister = (values) => {
    return (dispatch) => {
        dispatch(personRegisterRequest(values))
        axios.post(POST_REGISTER_PERSON, values
        )
            .then(res => {
                const currentUser = res.data;
                dispatch(personRegisterSuccess(currentUser));
            })
            .catch(error => {
                const errorMsg = error.response.data.message;
                dispatch(personRegisterError(errorMsg))
            })
    }
}



