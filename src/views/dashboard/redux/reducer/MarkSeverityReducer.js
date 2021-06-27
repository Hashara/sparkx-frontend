import produce from "immer";

import {
    MARK_SEVERITY_REQUEST ,
    MARK_SEVERITY_SUCCESS ,
    MARK_SEVERITY_FAILURE
} from '../actions/MarkSeverityActionTypes';

const initialState = {
    loading: false,
    successMsg: '',
    error: ''
}

export default function markSeverityLevelReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case MARK_SEVERITY_REQUEST:
                draft.loading = true;
                break;
            case MARK_SEVERITY_SUCCESS:
                draft.loading = false;
                draft.successMsg = action.payload;
                draft.error = '';
                break;
            case MARK_SEVERITY_FAILURE:
                draft.loading = false;
                draft.successMsg = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}