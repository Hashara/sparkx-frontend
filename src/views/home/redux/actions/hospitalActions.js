import axios from "axios";
import {GET_ALL_HOSPITALS} from '../../../../endPoints'

import {
    FETCH_HOSPITAL_REQUEST ,
    FETCH_HOSPITAL_SUCCESS ,
    FETCH_HOSPITAL_FAILURE
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