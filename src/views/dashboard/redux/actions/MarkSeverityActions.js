import axios from "axios";

import {
    MARK_SEVERITY_REQUEST,
    MARK_SEVERITY_SUCCESS,
    MARK_SEVERITY_FAILURE
} from './MarkSeverityActionTypes';

import {POST_MARK_SEVERITY_LEVEL} from "../../../../endPoints";


export const markSeverityLevelRequest = () => {
    return {
        type: MARK_SEVERITY_REQUEST
    }
}

export const markSeverityLevelSuccess = (severityTypes) => {
    return {
        type: MARK_SEVERITY_SUCCESS,
        payload: severityTypes
    }
}

export const markSeverityLevelFailure = (error) => {
    return {
        type: MARK_SEVERITY_FAILURE,
        payload: error
    }
}

export const markSeverityLevel = (level) => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(markSeverityLevelRequest)
        axios.post(POST_MARK_SEVERITY_LEVEL, {
            level : level,
            doctorId: state.auth.currentUser.currentUser.person.userId,
            serialNumber: state.activeRecord.active_record.serialNumber
            }, {
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                }
            }
        )
            .then(res => {
                const severityTypes = res.data
                console.log(res.data)
                dispatch(markSeverityLevelSuccess(severityTypes))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(markSeverityLevelFailure(errorMsg))
            })
    }
}