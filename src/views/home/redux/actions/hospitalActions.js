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

export const fetchHospitalById = () => {
    return (dispatch, state) => {
        dispatch(fetchHospitalByIdRequest)
        axios.get(GET_HOSPITAL_BY_ID
            ,{
            headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhN2M5ZmZhYy0yODU5LTQ2NDktOTY2MC01MzdhYjRiMjIxMTMiLCJpYXQiOjE2MjQ0MjM2NzIsImlzcyI6Ik5DTVMiLCJyb2xlIjoiTW9IIiwibmFtZSI6Im1vaCB1c2VyIiwiZXhwIjoxNjI0NDUzNjcyfQ.fIG1OJbF4Dgb-eprs6Pj2UIt6qGXRjA3d5mQjH_Xxb4"
            }
        }
        )
            .then(res => {
                const hospital = res.data;
                console.log(hospital)
                dispatch(fetchHospitalByIdSuccess(hospital));
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log("hello")
                dispatch(fetchHospitalByIdFailure(errorMsg));
            })
    }
}