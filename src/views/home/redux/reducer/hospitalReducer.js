import produce from "immer";

import {
    FETCH_HOSPITAL_REQUEST,
    FETCH_HOSPITAL_SUCCESS,
    FETCH_HOSPITAL_FAILURE,
    FETCH_HOSPITAL_BY_ID_REQUEST,
    FETCH_HOSPITAL_BY_ID_SUCCESS,
    FETCH_HOSPITAL_BY_ID_FAILURE
} from '../actions/hospitalActionTypes';

const initialState = {
    loading: false,
    hospitals: [],
    error: '',
    selectedHospital: '',
}

export default function hospitalReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_HOSPITAL_REQUEST:
                draft.loading = true;
                break;
            case FETCH_HOSPITAL_SUCCESS:
                draft.loading = false;
                draft.hospitals = action.payload;
                draft.error = '';
                break;
            case FETCH_HOSPITAL_FAILURE:
                draft.loading = false;
                draft.hospitals = [];
                draft.error = action.payload;
                break;
            case FETCH_HOSPITAL_BY_ID_REQUEST:
                draft.loading = true;
                break;
            case FETCH_HOSPITAL_BY_ID_SUCCESS:
                draft.loading = false;
                draft.selectedHospital = action.payload;
                draft.error = '';
                break;
            case FETCH_HOSPITAL_BY_ID_FAILURE:
                draft.loading = false;
                draft.selectedHospital = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}