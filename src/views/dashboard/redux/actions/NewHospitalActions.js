import axios from "axios";
import {POST_NEW_HOSPITAL} from '../../../../endPoints'

import {
    NEW_HOSPITAL_REQUEST,
    NEW_HOSPITAL_SUCCESS,
    NEW_HOSPITAL_ERROR
} from "./NewHospitalActionTypes";

export function newHospitalRequest(values) {
    return {
        type: NEW_HOSPITAL_REQUEST,
        values
    }
}

export function newHospitalSuccess(message) {
    return {
        type: NEW_HOSPITAL_SUCCESS,
        payload: {message}
    }
}

export function newHospitalError(message) {
    return {
        type: NEW_HOSPITAL_ERROR,
        payload: {message}
    }
}

export const newHospitalRegister = (values) => {
    return (dispatch, getState) => {
        const state = getState()
        dispatch(newHospitalRequest(values))
        axios.post(POST_NEW_HOSPITAL, values, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                }
            }
        )
            .then(res => {
                const successMsg = res.data;
                dispatch(newHospitalSuccess(successMsg));
            })
            .catch(error => {
                const errorMsg = error.response.data.message;
                dispatch(newHospitalError(errorMsg))
            })
    }
}
