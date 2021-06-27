import produce from "immer";

import {
    PATIENT_ADMIT_REQUEST ,
    PATIENT_ADMIT_SUCCESS ,
    PATIENT_ADMIT_FAILURE
} from '../actions/AdmitPatientActionTypes';

const initialState = {
    loading: false,
    successMsg: '',
    error: ''
}

export default function admitPatientReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case PATIENT_ADMIT_REQUEST:
                draft.loading = true;
                break;
            case PATIENT_ADMIT_SUCCESS:
                draft.loading = false;
                draft.successMsg = action.payload;
                draft.error = '';
                break;
            case PATIENT_ADMIT_FAILURE:
                draft.loading = false;
                draft.successMsg = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}