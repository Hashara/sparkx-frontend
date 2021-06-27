import axios from "axios";

import {
    FETCH_SEVERITY_TYPES_REQUEST ,
    FETCH_SEVERITY_TYPES_SUCCESS ,
    FETCH_SEVERITY_TYPES_FAILURE
} from './SeverityTypesActionTypes';

import {GET_SEVERITY_TYPES_DETAILS} from "../../../../endPoints";


export const fetchSeverityTypesRequest = () => {
    return {
        type: FETCH_SEVERITY_TYPES_REQUEST
    }
}

export const fetchSeverityTypesSuccess = (severityTypes) => {
    return {
        type: FETCH_SEVERITY_TYPES_SUCCESS,
        payload: severityTypes
    }
}

export const fetchSeverityTypesFailure = (error) => {
    return {
        type: FETCH_SEVERITY_TYPES_FAILURE,
        payload: error
    }
}

export const fetchSeverityTypes = () => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(fetchSeverityTypesRequest)
        axios.get(GET_SEVERITY_TYPES_DETAILS,{
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                }
            }
        )
            .then(res => {
                const severityTypes = res.data
                console.log(res.data)
                dispatch(fetchSeverityTypesSuccess(severityTypes))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(fetchSeverityTypesFailure(errorMsg))
            })
    }
}