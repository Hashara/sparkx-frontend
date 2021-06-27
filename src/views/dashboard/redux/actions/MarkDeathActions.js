import axios from "axios";

import {
    MARK_DEATH_REQUEST ,
    MARK_DEATH_SUCCESS ,
    MARK_DEATH_FAILURE
} from './MarkDeathActionTypes';

import {PUT_DEATH_PATIENT} from "../../../../endPoints";


export const deathPatientRequest = () => {
    return {
        type: MARK_DEATH_REQUEST
    }
}

export const deathPatientSuccess = (patientAdmit) => {
    return {
        type: MARK_DEATH_SUCCESS,
        payload: patientAdmit
    }
}

export const deathPatientFailure = (error) => {
    return {
        type: MARK_DEATH_FAILURE,
        payload: error
    }
}

export const deathPatient = (patientId) => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(deathPatientRequest)
        axios.put(PUT_DEATH_PATIENT,{}, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                },
                params: {
                    id: patientId
                }
            }
        )
            .then(res => {
                const patientAdmit = res.data
                dispatch(deathPatientSuccess(patientAdmit))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(deathPatientFailure(errorMsg))
            })
    }
}