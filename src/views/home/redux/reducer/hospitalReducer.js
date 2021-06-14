import produce from "immer";

import {
    FETCH_HOSPITAL_REQUEST ,
    FETCH_HOSPITAL_SUCCESS ,
    FETCH_HOSPITAL_FAILURE
} from '../actions/hospitalActionTypes';

const initialState = {
    loading: false,
    hospitals: [],
    error: ''
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
            default:
                break;
        }
    });
}