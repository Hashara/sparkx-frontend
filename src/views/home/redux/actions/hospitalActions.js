import axios from "axios";
import {GET_ALL_HOSPITALS, GET_HOSPITAL_BY_ID} from '../../../../endPoints'

import {
    FETCH_HOSPITAL_REQUEST ,
    FETCH_HOSPITAL_SUCCESS ,
    FETCH_HOSPITAL_FAILURE,
    FETCH_HOSPITAL_BY_ID_REQUEST,
    FETCH_HOSPITAL_BY_ID_SUCCESS,
    FETCH_HOSPITAL_BY_ID_FAILURE
} from './hospitalActionTypes';


export const fetchHospitalRequest = () => {
    return {
        type: FETCH_HOSPITAL_REQUEST
    }
}

export const fetchHospitalSuccess = (hospitals) => {
    return {
        type: FETCH_HOSPITAL_SUCCESS,
        payload: hospitals
    }
}

export const fetchHospitalFailure = (error) => {
    return {
        type: FETCH_HOSPITAL_FAILURE,
        payload: error
    }
}

export const fetchHospitalByIdRequest = () => {
    return{
        type:FETCH_HOSPITAL_BY_ID_REQUEST
    }
}

export const fetchHospitalByIdSuccess = (hospital) => {
    return {
        type: FETCH_HOSPITAL_BY_ID_SUCCESS,
        payload: hospital
    }
}

export const fetchHospitalByIdFailure = (error) => {
    return {
        type: FETCH_HOSPITAL_BY_ID_FAILURE,
        payload: error
    }
}

export const fetchHospitals = () => {
    return (dispatch) => {
        dispatch(fetchHospitalRequest)
        axios.get(GET_ALL_HOSPITALS)
            .then(res => {
                const hospital = res.data;
                dispatch(fetchHospitalSuccess(hospital));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchHospitalFailure(errorMsg));
            })
    }
}

export const fetchHospitalById = (hospitalId) => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(fetchHospitalByIdRequest)
        axios.get(GET_HOSPITAL_BY_ID
            ,{
                params: {
                    hospitalid: hospitalId,
                },
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                }
        }
        )
            .then(res => {
                const hospital = res.data;
                dispatch(fetchHospitalByIdSuccess(hospital));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchHospitalByIdFailure(errorMsg));
            })
    }
}