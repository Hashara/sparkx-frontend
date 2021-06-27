import axios from "axios";

import {
    PATIENT_DETAILS_REQUEST,
    PATIENT_DETAILS_SUCCESS,
    PATIENT_DETAILS_FAILURE
} from './PatientDetailsActionTypes';

import {GET_PATIENT_DETAILS} from "../../../../endPoints";


export const fetchPatientDetailsRequest = () => {
    return {
        type: PATIENT_DETAILS_REQUEST
    }
}

export const fetchPatientDetailsSuccess = (patient) => {
    return {
        type: PATIENT_DETAILS_SUCCESS,
        payload: patient
    }
}

export const fetchPatientDetailsFailure = (error) => {
    return {
        type: PATIENT_DETAILS_FAILURE,
        payload: error
    }
}

export const fetchPatientDetails = (patientId) => {
    return (dispatch, getState) => {
        const state = getState()

        if(state.auth.currentUser.currentUser.person.role ==="Patient"){
            patientId = state.auth.currentUser.currentUser.person.userId
        }
        dispatch(fetchPatientDetailsRequest)
        axios.get(GET_PATIENT_DETAILS, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                },
                params: {
                    id: patientId,
                }
            }
        )
            .then(res => {
                const patient = res.data
                dispatch(fetchPatientDetailsSuccess(patient))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(fetchPatientDetailsFailure(errorMsg))
            })
    }
}