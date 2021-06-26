import axios from "axios";

import {
    PATIENT_OF_HOSPITAL_REQUEST,
    PATIENT_OF_HOSPITAL_SUCCESS,
    PATIENT_OF_HOSPITAL_FAILURE
} from './PatientsOfHospitalActionTypes';

import {GET_PATIENT_OF_HOSPITAL} from "../../../../endPoints";


export const fetchPatientsOfHospitalRequest = () => {
    return {
        type: PATIENT_OF_HOSPITAL_REQUEST
    }
}

export const fetchPatientsOfHospitalSuccess = (patientsOfHospital) => {
    return {
        type: PATIENT_OF_HOSPITAL_SUCCESS,
        payload: patientsOfHospital
    }
}

export const fetchPatientsOfHospitalFailure = (error) => {
    return {
        type: PATIENT_OF_HOSPITAL_FAILURE,
        payload: error
    }
}

export const fetchPatientsOfHospital = () => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(fetchPatientsOfHospitalRequest)
        axios.get(GET_PATIENT_OF_HOSPITAL, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                },
                params: {
                    id: state.auth.currentUser.currentUser.person.hospitalId,
                }
            }
        )
            .then(res => {
                const patientsOfHospital = res.data
                dispatch(fetchPatientsOfHospitalSuccess(patientsOfHospital))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPatientsOfHospitalFailure(errorMsg))
            })
    }
}