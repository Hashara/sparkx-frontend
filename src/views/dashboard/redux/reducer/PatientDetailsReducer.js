import produce from "immer";

import {
   PATIENT_DETAILS_REQUEST ,
   PATIENT_DETAILS_SUCCESS ,
   PATIENT_DETAILS_FAILURE
} from '../actions/PatientDetailsActionTypes';

const initialState = {
    loading: false,
    patient: '',
    error: ''
}

export default function patientReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case PATIENT_DETAILS_REQUEST:
                draft.loading = true;
                break;
            case PATIENT_DETAILS_SUCCESS:
                draft.loading = false;
                draft.patient = action.payload;
                draft.error = '';
                break;
            case PATIENT_DETAILS_FAILURE:
                draft.loading = false;
                draft.patient = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}