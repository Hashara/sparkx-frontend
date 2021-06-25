import axios from "axios";

import {
    ACTIVE_RECORD_REQUEST,
    ACTIVE_RECORD_SUCCESS,
    ACTIVE_RECORD_FAILURE
} from './ActiveRecordActionTypes';

import {GET_ACTIVE_RECORD} from "../../../../endPoints";


export const fetchActiveRecordRequest = () => {
    return {
        type: ACTIVE_RECORD_REQUEST
    }
}

export const fetchActiveRecordSuccess = (activeRecord) => {
    return {
        type: ACTIVE_RECORD_SUCCESS,
        payload: activeRecord
    }
}

export const fetchActiveRecordFailure = (error) => {
    return {
        type: ACTIVE_RECORD_FAILURE,
        payload: error
    }
}

export const fetchActiveRecords = () => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(fetchActiveRecordRequest)
        axios.get(GET_ACTIVE_RECORD, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                },
                params: {
                    id: state.auth.currentUser.currentUser.person.userId,
                }
            }
        )
            .then(res => {
                const activeRecord = res.data
                dispatch(fetchActiveRecordSuccess(activeRecord))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(fetchActiveRecordFailure(errorMsg))
            })
    }
}