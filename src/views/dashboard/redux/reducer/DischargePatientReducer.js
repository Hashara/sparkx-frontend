import produce from "immer";

import {
    PATIENT_DISCHARGE_REQUEST ,
    PATIENT_DISCHARGE_SUCCESS ,
    PATIENT_DISCHARGE_FAILURE
} from '../actions/DischargePatientActionTypes';

const initialState = {
    loading: false,
    successMsg: '',
    error: ''
}

export default function dischargePatientReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case PATIENT_DISCHARGE_REQUEST:
                draft.loading = true;
                break;
            case PATIENT_DISCHARGE_SUCCESS:
                draft.loading = false;
                draft.successMsg = action.payload;
                draft.error = '';
                break;
            case PATIENT_DISCHARGE_FAILURE:
                draft.loading = false;
                draft.successMsg = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}