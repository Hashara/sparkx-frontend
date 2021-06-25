import produce from "immer";

import {
    NEW_HOSPITAL_REQUEST,
    NEW_HOSPITAL_SUCCESS,
    NEW_HOSPITAL_ERROR
} from "../actions/NewHospitalActionTypes";

const initialState = {
    loading: false,
    successMsg: '',
    error: ''
}

export default function newHospitalReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case NEW_HOSPITAL_REQUEST:
                draft.loading = true;
                break;
            case NEW_HOSPITAL_SUCCESS:
                draft.loading = false;
                draft.successMsg = action.payload;
                draft.error = '';
                break;
            case NEW_HOSPITAL_ERROR:
                draft.loading = false;
                draft.successMsg = '';
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}