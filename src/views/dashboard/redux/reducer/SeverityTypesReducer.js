import produce from "immer";

import {
    FETCH_SEVERITY_TYPES_REQUEST ,
    FETCH_SEVERITY_TYPES_SUCCESS ,
    FETCH_SEVERITY_TYPES_FAILURE
} from '../actions/SeverityTypesActionTypes';

const initialState = {
    loading: false,
    severityType: '',
    error: ''
}

export default function severityTypeReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_SEVERITY_TYPES_REQUEST:
                draft.loading = true;
                break;
            case FETCH_SEVERITY_TYPES_SUCCESS:
                draft.loading = false;
                draft.severityType = action.payload;
                draft.error = '';
                break;
            case FETCH_SEVERITY_TYPES_FAILURE:
                draft.loading = false;
                draft.severityType = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}