import produce from "immer";

import {
    FETCH_DISTRICT_REQUEST ,
    FETCH_DISTRICT_SUCCESS ,
    FETCH_DISTRICT_FAILURE
} from '../actions/districtActionTypes';

const initialState = {
    loading: false,
    districts: [],
    error: ''
}

export default function districtReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_DISTRICT_REQUEST:
                draft.loading = true;
                break;
            case FETCH_DISTRICT_SUCCESS:
                draft.loading = false;
                draft.districts = action.payload;
                draft.error = '';
                break;
            case FETCH_DISTRICT_FAILURE:
                draft.loading = false;
                draft.districts = [];
                draft.error = action.payload;
                break;
            default:
                break;
        }
    });
}