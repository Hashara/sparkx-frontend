import produce from "immer";

import {
    PATIENT_OF_HOSPITAL_REQUEST ,
    PATIENT_OF_HOSPITAL_SUCCESS ,
    PATIENT_OF_HOSPITAL_FAILURE
} from '../actions/PatientsOfHospitalActionTypes';

const initialState = {
    loading: false,
    patientsOfHospital: '',
    error: ''
}

export default function patientsOfHospitalReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case PATIENT_OF_HOSPITAL_REQUEST:
                draft.loading = true;
                break;
            case PATIENT_OF_HOSPITAL_SUCCESS:
                draft.loading = false;
                draft.patientsOfHospital = action.payload;
                draft.error = '';
                break;
            case PATIENT_OF_HOSPITAL_FAILURE:
                draft.loading = false;
                draft.patientsOfHospital = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}