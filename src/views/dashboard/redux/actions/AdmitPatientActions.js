import axios from "axios";

import {
    PATIENT_ADMIT_REQUEST ,
    PATIENT_ADMIT_SUCCESS ,
    PATIENT_ADMIT_FAILURE
} from './AdmitPatientActionTypes';

import {PUT_ADMIT_PATIENT} from "../../../../endPoints";


export const putPatientAdmitRequest = () => {
    return {
        type: PATIENT_ADMIT_REQUEST
    }
}

export const putPatientAdmitSuccess = (patientAdmit) => {
    return {
        type: PATIENT_ADMIT_SUCCESS,
        payload: patientAdmit
    }
}

export const putPatientAdmitFailure = (error) => {
    return {
        type: PATIENT_ADMIT_FAILURE,
        payload: error
    }
}

export const putPatientAdmit = (serialNumber) => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(putPatientAdmitRequest)
        axios.put(PUT_ADMIT_PATIENT,{}, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                },
                params: {
                    serialNumber: serialNumber
                }
            }
        )
            .then(res => {
                const patientAdmit = res.data
                dispatch(putPatientAdmitSuccess(patientAdmit))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(putPatientAdmitFailure(errorMsg))
            })
    }
}