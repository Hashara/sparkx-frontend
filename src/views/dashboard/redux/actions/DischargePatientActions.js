import axios from "axios";

import {
    PATIENT_DISCHARGE_REQUEST ,
    PATIENT_DISCHARGE_SUCCESS ,
    PATIENT_DISCHARGE_FAILURE
} from './DischargePatientActionTypes';

import {PUT_DISCHARGE_PATIENT} from "../../../../endPoints";


export const dischargePatientRequest = () => {
    return {
        type: PATIENT_DISCHARGE_REQUEST
    }
}

export const dischargePatientSuccess = (patientAdmit) => {
    return {
        type: PATIENT_DISCHARGE_SUCCESS,
        payload: patientAdmit
    }
}

export const dischargePatientFailure = (error) => {
    return {
        type: PATIENT_DISCHARGE_FAILURE,
        payload: error
    }
}

export const dischargePatient = (serialNumber) => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(dischargePatientRequest)
        axios.put(PUT_DISCHARGE_PATIENT,{}, {
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
                dispatch(dischargePatientSuccess(patientAdmit))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(dischargePatientFailure(errorMsg))
            })
    }
}