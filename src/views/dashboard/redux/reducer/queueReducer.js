import produce from "immer";

import {
    FETCH_QUEUE_REQUEST ,
    FETCH_QUEUE_SUCCESS ,
    FETCH_QUEUE_FAILURE
} from '../actions/queueActionTypes';

const initialState = {
    loading: false,
    queue: '',
    error: ''
}

export default function queueReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_QUEUE_REQUEST:
                draft.loading = true;
                break;
            case FETCH_QUEUE_SUCCESS:
                draft.loading = false;
                draft.queue = action.payload;
                draft.error = '';
                break;
            case FETCH_QUEUE_FAILURE:
                draft.loading = false;
                draft.queue = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}