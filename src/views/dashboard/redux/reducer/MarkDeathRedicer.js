import produce from "immer";

import {
    MARK_DEATH_REQUEST ,
    MARK_DEATH_SUCCESS ,
    MARK_DEATH_FAILURE
} from '../actions/MarkDeathActionTypes';

const initialState = {
    loading: false,
    successMsg: '',
    error: ''
}

export default function deathPatientReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case MARK_DEATH_REQUEST:
                draft.loading = true;
                break;
            case MARK_DEATH_SUCCESS:
                draft.loading = false;
                draft.successMsg = action.payload;
                draft.error = '';
                break;
            case MARK_DEATH_FAILURE:
                draft.loading = false;
                draft.successMsg = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}