import produce from "immer";

import {
    ACTIVE_RECORD_REQUEST ,
    ACTIVE_RECORD_SUCCESS ,
    ACTIVE_RECORD_FAILURE
} from '../actions/ActiveRecordActionTypes';

const initialState = {
    loading: false,
    active_record: '',
    error: ''
}

export default function activeRecordReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case ACTIVE_RECORD_REQUEST:
                draft.loading = true;
                break;
            case ACTIVE_RECORD_SUCCESS:
                draft.loading = false;
                draft.active_record = action.payload;
                draft.error = '';
                break;
            case ACTIVE_RECORD_FAILURE:
                draft.loading = false;
                draft.active_record = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}