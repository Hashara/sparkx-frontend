import axios from "axios";

import {
    FETCH_QUEUE_REQUEST ,
    FETCH_QUEUE_SUCCESS ,
    FETCH_QUEUE_FAILURE
} from './queueActionTypes';
import {GET_QUEUE_DETAILS} from "../../../../endPoints";


export const fetchQueueRequest = () => {
    return {
        type: FETCH_QUEUE_REQUEST
    }
}

export const fetchQueueSuccess = (queues) => {
    return {
        type: FETCH_QUEUE_SUCCESS,
        payload: queues
    }
}

export const fetchQueueFailure = (error) => {
    return {
        type: FETCH_QUEUE_FAILURE,
        payload: error
    }
}

export const fetchQueues = () => {
    return (dispatch, getState) => {
        const state = getState()

        dispatch(fetchQueueRequest)
        axios.get(GET_QUEUE_DETAILS,{
                headers: {
                    'Authorization': 'Bearer ' + state.auth.currentUser.currentUser.jwt
                }
            }
            )
            .then(res => {
                const queue = res.data
                console.log(res.data)
                dispatch(fetchQueueSuccess(queue))
            })
            .catch(error => {
                const errorMsg = error.message
                console.log(errorMsg)
                dispatch(fetchQueueFailure(errorMsg))
            })
    }
}